<?php 

header("Cache-Control: private, no-cache, no-store, max-age=0, must-revalidate, proxy-revalidate"); 
opcache_reset(); 

echo "Opcache Flushed";