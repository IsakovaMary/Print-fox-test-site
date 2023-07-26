<!-- <?php 
    $db = new PDO("mysql:host=localhost;dbname=fox-print", "root", "root");
    $info = [];

    if($query = $db->query("SELECT * FROM `img`")) {
        $query->fetchAll(PDO::FETCH_ASSOC);
    } else {
        print_r($db->errorInfo());
    }
?> -->

<?php
    define('DB_HOST', 'localhost');
    define('DB_USER', 'root');
    define('DB_PASSWORD', 'rdgrtyt');
    define('DB_NAME', 'fox-print');

    $mysql = @new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
    if ($mysql->connect_errno) exit('Ощибка подключения к БД');
    $mysql->set_charset('utf8')
?>