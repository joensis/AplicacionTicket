<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

include "conexion.php";

$postData = file_get_contents("php://input");
$request = json_decode($postData, true);

$sql_mostrar= "SELECT * FROM incidencias WHERE estado = 'pendiente'";
$result= $con->query($sql_mostrar);

$incidencias=[];

if ($result){
    while($array = $result->fetch_assoc()){
        $incidencias[] = $array;

    };
    echo json_encode($incidencias);
    

}
else{
    echo json_encode(["status" => "error"]);
}

$con->close();






?>