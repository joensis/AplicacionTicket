<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

include 'conexion.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $data = json_decode(file_get_contents('php://input'), true);
    $cliente = $data['cliente'];

    // Prevenir inyección SQL
    $cliente = $con->real_escape_string($cliente);

    // Buscar clientes que coincidan parcialmente

    $sql = "SELECT cliente FROM usuarios WHERE cliente LIKE '%$cliente%' LIMIT 10";
    $result = $con->query($sql);

    $clientes = array();
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $clientes[] = $row['cliente'];
        }
    }
    echo json_encode($clientes);

} else {
    echo json_encode([]);
}
$con->close();



?>