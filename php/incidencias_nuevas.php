<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");


include "conexion.php";


$postData = file_get_contents("php://input");
$request = json_decode($postData, true);



$id_user = isset($request['id_user']) ? $request['id_user'] : ''; //si existe la asignamos a $id_user, si no $id_user estará vacia
$usuario = isset($request['usuario']) ? $request['usuario'] : '';

$sql_mostrar = "SELECT * FROM incidencias WHERE id_usuario = $id_user AND estado = 'nueva'";
$result = $con->query($sql_mostrar);

$incidencias = [];

if ($result) {
    while ($array = $result->fetch_assoc()) {
        $incidencias[] = $array;

    }
    ;
    echo json_encode($incidencias);


} else {
    echo json_encode(["status" => "error"]);
}

$con->close();





?>