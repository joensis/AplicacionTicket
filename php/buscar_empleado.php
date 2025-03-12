<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

include 'conexion.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $empleado = $data['empleado'];

    // Prevenir inyección SQL
    $empleado = $con->real_escape_string($empleado);

    // Buscar empleados que coincidan parcialmente

    $sql = "SELECT nombre FROM empleados WHERE nombre LIKE '%$empleado%' LIMIT 10";
    $result = $con->query($sql);

    $opciones_empleados = array();
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $opciones_empleados[] = $row['nombre'];
        }
    }
    echo json_encode($opciones_empleados);

} else {
    echo json_encode([]);

    $con->close();

}

?>