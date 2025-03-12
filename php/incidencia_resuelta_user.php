<?php 
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");


include"conexion.php";


$postData = file_get_contents("php://input");
$request = json_decode($postData, true);

$id_user = $request['id_user'];
$usuario = $request['usuario'];

$sql = "SELECT * FROM incidencias WHERE id_usuario = '$id_user' AND estado = 'resuelta'";
$request = $con->query($sql);

$resueltas=[];

if ($request){
    while($array = $request->fetch_assoc()){
        $resueltas[] = $array;

    };
    echo json_encode($resueltas);
    

}
else{
    echo json_encode(["status" => "error"]);
}

$con->close();