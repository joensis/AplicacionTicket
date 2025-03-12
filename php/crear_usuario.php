<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

include "conexion.php";

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $data = json_decode(file_get_contents('php://input'), true);

    $date = new DateTime();

    $usuario = $data['usuario'];
    $cliente = $data['cliente'];
    $contrasena = $data['contrasena'];

    $sql = "INSERT INTO usuarios (usuario, contraseña, cliente) VALUES ('$usuario','$contrasena', '$cliente'  )";
    $result = $con->query($sql);

    if ($result == true) {

        echo json_encode(["status" => "ok"]);

    } else {
        echo json_encode(["status" => "error"]);
    }







}







?>