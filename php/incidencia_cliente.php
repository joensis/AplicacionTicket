<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
header('Content-Type: application/json; charset=utf-8');

include 'conexion_incidencias.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $data = json_decode(file_get_contents('php://input'), true);



    $usuario = $data['problemaUsuario'];
    $prioridad = $data['problemaPrioridad'];
    $titulo = $data['problemaTitulo'];
    $descripcion = $data['problemaDescripcion'];




    $sql = "INSERT INTO incidencias_clientes (nombre, prioridad, titulo, descripcion) VALUES ('$usuario', '$prioridad', '$titulo', '$descripcion')";

    $result = $con->query($sql);


    if ($result == true) {

        echo json_encode(["status" => "ok"]);

    } else {
        echo json_encode(["status" => "error"]);
    }

}








?>