<?php

    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Allow: GET, POST, OPTIONS, PUT, DELETE");

    include('conexion.php');

    

    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        $data = json_decode(file_get_contents('php://input'), true);

        if (!empty($data)) {

            $id_incidencia = $data['id_incidencia'];
            

    
            $sql = "DELETE FROM incidencias WHERE id_incidencia = '$id_incidencia'";
            $query= $con->query($sql);


            if ($query){
                echo json_encode(["status" => "ok" ]);
                
            }else{
                echo json_encode(["status" => "error" ]);
            }


        }else{
            echo json_encode(["status" => "no hay datos para cargar" ]);
        }
    
    }



?>