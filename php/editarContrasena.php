<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

include "conexion.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $data = json_decode(file_get_contents('php://input'), true);




    $id = $data['id'];
    $cambioContrasena = $data['cambioCliente'];



    // Prevenir inyección SQL
    $cambioContrasena = $con->real_escape_string($cambioContrasena);
    $id = $con->real_escape_string($id);


    $sql = "UPDATE usuarios SET contraseña = '$cambioContrasena' WHERE id_usuario = '$id'";

    $result = $con->query($sql);

    if ($result) {
        echo json_encode(["status" => "ok"]);
    } else {
        echo json_encode(["status" => "error"]);
    }

    $con->close();






}


?>