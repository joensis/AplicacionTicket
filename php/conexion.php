<?php

$host = 'localhost';
$name = 'incidencias';
$user = 'root';
$pass = '';

$con = mysqli_connect($host, $user, $pass, $name);

if (!$con) {
    echo "Error de conexión";

}


?>