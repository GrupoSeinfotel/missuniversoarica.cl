from pathlib import Path
import re

ROOT=Path(__file__).resolve().parents[2]
PUBLIC=ROOT/'2027/produccion/arica2027'
for p in PUBLIC.iterdir():
    if p.suffix in ('.js','.css','.html'):
        text=p.read_text(encoding='utf-8')
        text=text.replace("'/assets/","'/arica2027/assets/").replace('"/assets/','"/arica2027/assets/')
        if p.name=='app.js':
            text=text.replace("fetch('/api/'+path,", "fetch('/arica2027/api.php?action='+encodeURIComponent(path),")
            text=text.replace("minlength=\"12\" maxlength=\"128\" required autocomplete=\"current-password\"", "minlength=\"1\" maxlength=\"128\" required autocomplete=\"current-password\"")
        p.write_text(text,encoding='utf-8')

index=(ROOT/'2027/miss-universo-arica-2027-v3/miss-universo-arica/public/index.html').read_text(encoding='utf-8').replace('"/assets/','"/arica2027/assets/')
for name in ['style.css','neon.css','neon-final.css','reference-v3.css','reference-fixes.css','app.js','experience.js','reference-v3.js']:
    index=index.replace('"/'+name+'"','"/arica2027/'+name+'?v=20271015"')
index=index.replace('</head>','<link rel="canonical" href="https://missuniversoarica.cl/"><meta property="og:title" content="Miss Universo Arica 2027"><meta property="og:description" content="La nueva edición de Miss Universo Arica. Convocatoria, protagonistas y legado 2026."><meta property="og:image" content="https://missuniversoarica.cl/og-image-arica.png"><meta property="og:type" content="website"><link rel="stylesheet" href="/arica2027/production.css?v=20271015"><script src="/arica2027/production.js?v=20271015" defer></script></head>')
index=index.replace('Diseño de desarrollo · Edición Arica 2027 · Sin resultados oficiales publicados','© 2027 Miss Universo Arica · Una nueva edición, una historia que permanece.')
(ROOT/'2027/produccion/index.html').write_text(index,encoding='utf-8')
# El acceso al subdirectorio se redirige al sitio, sin duplicar la portada canónica.
(PUBLIC/'index.html').write_text('<!doctype html><html lang="es"><meta charset="utf-8"><meta http-equiv="refresh" content="0;url=/"><title>Miss Universo Arica</title><a href="/">Ir al sitio oficial</a></html>',encoding='utf-8')
legacy=ROOT/'2027/produccion/legado/2026/index.html'
text=legacy.read_text(encoding='utf-8')
text=text.replace('<body', '<body')
text=text.replace('</head>','<meta name="robots" content="noindex,follow"><style>#legacy-notice{position:fixed;bottom:0;left:0;right:0;z-index:2147483647;background:#08162d;color:white;padding:14px 20px;font:14px Arial;text-align:center}#legacy-notice a{color:#a8eaff;margin-left:18px}</style></head>')
text=text.replace('</body>','<aside id="legacy-notice">Archivo 2026 · Página conservada como registro histórico. Las ventas y votaciones de esta edición han terminado.<a href="/#archivo">Ver el legado</a><a href="/">Ir a 2027</a></aside><script>document.querySelectorAll("button").forEach(b=>{if(/comprar|pagar|votar/i.test(b.textContent)){b.disabled=true;b.title="Edición histórica cerrada"}});</script></body>')
legacy.write_text(text,encoding='utf-8')
print('Portada aislada, recursos con prefijo /arica2027 y archivo histórico preparados.')
