<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");


include("conexion.php");

if ($_SERVER['REQUEST_METHOD'] == 'POST') {


    $data = json_decode(file_get_contents('php://input'), true);  /* codificamos en json los datos recibidos en "bruto" desde react.
Se manejan los datos en json en lugar de los datos "post" */

    $usuario = $data['usuario'];
    $contrasena = $data['contrasena'];


    // Prevenir inyección SQL
    $usuario = $con->real_escape_string($usuario);
    $contrasena = $con->real_escape_string($contrasena);


    /* consulta sql */



    $sql = "SELECT * FROM usuarios WHERE usuario = '$usuario' AND contraseña = '$contrasena'";


    $result = $con->query($sql);

    /* verificar datos */

    if ($result->num_rows > 0) {

        $user = $result->fetch_assoc();

        if ($user['id_usuario'] == 1) {

            $id_usuario = $user['id_usuario'];
            $nombre_usuario = $user['usuario'];
            $response = array("id_user" => $id_usuario, "usuario" => $nombre_usuario, "mensaje" => "admin");
            echo json_encode($response);


        } else {
            $id_usuario = $user['id_usuario'];
            $nombre_usuario = $user['usuario'];
            $response = array("id_user" => $id_usuario, "usuario" => $nombre_usuario, "mensaje" => "usuario");
            echo json_encode($response);

        }


    } else {
        $response = array("mensaje" => "error");
        echo json_encode($response);
    }


    /* cerrar la conexion */

    $con->close();

}

?>