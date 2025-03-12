<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

include "conexion.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $data = json_decode(file_get_contents('php://input'), true);




    $id = $data['id'];
    $nombreEmpleado = $data['nombreEmpleado'];



    // Prevenir inyección SQL
    $nombreEmpleado = $con->real_escape_string($nombreEmpleado);
    $id = $con->real_escape_string($id);


    $sql = "UPDATE empleados SET nombre = '$nombreEmpleado' WHERE id = '$id'";

    $result = $con->query($sql);

    if ($result) {
        echo json_encode(["status" => "ok"]);
    } else {
        echo json_encode(["status" => "error"]);
    }

    $con->close();






}


?>