<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");


include('conexion.php');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $data = json_decode(file_get_contents('php://input'), true);

    $date = new DateTime();
    $fecha = $date->format('Y-m-d'); //fecha para mostrar en la aplicacion  */


    $titulo = $data['titulo'];
    $descripcion = $data['descripcion'];
    $id_user = $data['id_user'];
    $usuario = $data['usuario'];
    $departamento = $data['departamento'];



    $sql = "INSERT INTO incidencias (titulo, descripcion, fecha, id_usuario, usuario, estado, departamento) VALUES ('$titulo', '$descripcion', '$fecha', '$id_user', '$usuario', 'nueva', '$departamento')";

    $result = $con->query($sql);


    if ($result == true) {

        echo json_encode(["status" => "ok"]);

    } else {
        echo json_encode(["status" => "error"]);
    }

}







?>