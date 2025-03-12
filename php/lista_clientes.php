<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

include 'conexion.php';

try {
    // Realizamos la consulta para obtener los datos de la columna 'cliente'
    $sql = "SELECT cliente FROM usuarios";
    $result = $con->query($sql);

    if ($result->num_rows > 0) {
        $clientes = [];

        // Obtenemos los datos de la consulta
        while ($row = $result->fetch_assoc()) {
            $clientes[] = $row['cliente'];
        }

        // Devolvemos la respuesta en formato JSON
        echo json_encode([
            "status" => "ok",
            "listaClientes" => $clientes
        ]);

    } else {
        // Si no hay registros en la tabla
        echo json_encode([
            "status" => "error",
            "message" => "No se encontraron clientes"
        ]);
    }

} catch (Exception $e) {
    // En caso de error
    echo json_encode([
        "status" => "error",
        "message" => "Error en el servidor: " . $e->getMessage()
    ]);
}
?>