from pathlib import Path
import ftplib,json,hashlib,secrets,urllib.request,io
ROOT=Path(__file__).resolve().parents[2];PUBLIC=ROOT/'2027/produccion';BACKUP=Path('C:/MISS UNIVERSO/backups/arica-20261015')
c=json.loads(Path('C:/Users/crist/.codex/private/missarica-deploy.json').read_text());manifest=json.loads((BACKUP/'manifiesto-publicacion-2027.json').read_text())
f=ftplib.FTP(c['host'],timeout=90);f.login(c['username'],c['password']);changed=[]
try:
 for entry in manifest:
  p=PUBLIC/entry['path'].lstrip('/');sha=hashlib.file_digest(p.open('rb'),'sha256').hexdigest()
  if sha!=entry['sha256']:
   with p.open('rb') as source:f.storbinary('STOR '+entry['path'],source,blocksize=262144)
   assert f.size(entry['path'])==p.stat().st_size
   entry.update(sha256=sha,bytes=p.stat().st_size);changed.append(entry['path'])
 with (PUBLIC/'index.html').open('rb') as source:f.storbinary('STOR /arica-2027-revision.html',source)
 token=secrets.token_hex(32);name='/arica2027/revision-'+secrets.token_hex(8)+'.php'
 code='''<?php
 if(!hash_equals('__HASH__',hash('sha256',$_SERVER['HTTP_X_REVISION_TOKEN']??''))){http_response_code(404);exit;}
 $p=dirname(__DIR__,2).'/arica2027-private';$ok=is_dir($p)||@mkdir($p,0700,true);
 $test=$p.'/revision-'.bin2hex(random_bytes(8));$write=$ok&&file_put_contents($test,'ok')===2;if($write)unlink($test);
 header('Content-Type:application/json');echo json_encode(['php'=>PHP_VERSION,'private_storage'=>$write,'fileinfo'=>extension_loaded('fileinfo'),'upload_max'=>ini_get('upload_max_filesize'),'post_max'=>ini_get('post_max_size')]);
 '''.replace('__HASH__',hashlib.sha256(token.encode()).hexdigest()).encode()
 f.storbinary('STOR '+name,io.BytesIO(code))
 try:
  req=urllib.request.Request('https://missuniversoarica.cl'+name,headers={'User-Agent':'Mozilla/5.0','X-Revision-Token':token})
  with urllib.request.urlopen(req,timeout=40) as r:result=json.load(r)
 finally:f.delete(name)
 assert result['private_storage'] and result['fileinfo'], 'El almacenamiento privado debe funcionar antes de publicar.'
 (BACKUP/'preflight-servidor.json').write_text(json.dumps(result,indent=2))
 (BACKUP/'manifiesto-publicacion-2027.json').write_text(json.dumps(manifest,indent=2),encoding='utf-8')
 print(json.dumps({'updated':changed,'server':result}))
finally:f.quit()
