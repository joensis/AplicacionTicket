<?php

$host = 'localhost';
$name = 'incidencias_clientes';
$user = 'root';
$pass = '';

$con = mysqli_connect($host, $user, $pass, $name);

if (!$con) {
    echo "Error de conexión";

}