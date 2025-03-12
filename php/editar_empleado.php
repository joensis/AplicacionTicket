<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

include "conexion.php";



$data = json_decode(file_get_contents('php://input'), true);

$empleado = $data['empleado'];


if (!isset($data['empleado'])) {
    echo json_encode(['error' => 'No se ha proporcionado el empleado']);
    exit;
}

// Prevenir inyección SQL
$empleado = $con->real_escape_string($empleado);




$sql = "SELECT id, nombre, apellidos, departamento, email FROM empleados WHERE nombre = '$empleado'";

$result = $con->query($sql);

if ($result->num_rows > 0) {

    $user = $result->fetch_assoc();

    $response = array("id" => $user['id'], "nombre" => $user['nombre'], "apellidos" => $user['apellidos'], "departamento" => $user['departamento'], "email" => $user['email']);

    echo json_encode($response);



}

$con->close();













?>