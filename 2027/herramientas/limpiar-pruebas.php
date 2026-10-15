<?php
require 'C:/MISS UNIVERSO/backups/arica-20261015/config-prueba.php';
if($pdo->query('SELECT DATABASE()')->fetchColumn()!=='missuniversoarica2027_test')throw new Exception('Solo se permite limpiar la base de pruebas creada para esta revisión.');
foreach(['arica27_candidates','arica27_news','arica27_votes','arica27_leads','arica27_submissions','arica27_sponsors','arica27_events','arica27_audit','arica27_limits'] as $table)$pdo->exec('TRUNCATE TABLE '.$table);
$pdo->exec("DELETE FROM arica27_users WHERE role<>'admin'");
echo "Datos sintéticos eliminados exclusivamente de la base de pruebas.\n";
