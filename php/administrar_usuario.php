<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

include "conexion.php";



$data = json_decode(file_get_contents('php://input'), true);

$cliente = $data['cliente'];


if (!isset($data['cliente'])) {
    echo json_encode(['error' => 'No se ha proporcionado el cliente']);
    exit;
}

// Prevenir inyección SQL
$cliente = $con->real_escape_string($cliente);




$sql = "SELECT id_usuario, usuario, contraseña, cliente FROM usuarios WHERE cliente = '$cliente'";

$result = $con->query($sql);

if ($result->num_rows > 0) {

    $user = $result->fetch_assoc();

    $response = array("id_usuario" => $user['id_usuario'], "usuario" => $user['usuario'], "contrasena" => $user['contraseña'], "cliente" => $user['cliente']);

    echo json_encode($response);



}

$con->close();













?>