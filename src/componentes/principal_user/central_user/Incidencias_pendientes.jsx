
import '../../../css/principal_user/central_user/incidencias_pendientes.css';
import { useState, useEffect } from 'react';
import Desplegar_incidencia from '../../principal_admin/central_admin/incidencias/Desplegar_incidencias';


const Incidencias_pendientes = ({titulo, id_user, usuario, url_php}) =>{

    const [incidencias, setIncidencias] = useState([]);
    const [desplegar, setDesplegar] = useState(null);


    useEffect (()=>{    // hook que maneja cambios debido a influencias externas

        const fetchIncidencias = async ()=>{

            try {

                const response = await fetch (url_php,{

                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ id_user, usuario })
                });
                
                const data = await response.json();

                 //formatear la hora
                 const incidenciasFormateadas = data.map((incidencia) => {
                    const date = new Date(incidencia.fecha);
                    incidencia.fecha = date.toLocaleDateString('es-ES');
                    return incidencia;
                });


                setIncidencias(incidenciasFormateadas);

            } catch(error){
            console.log("Error al obtener las incidencias:");
            }

        }


        fetchIncidencias();

    },[]);



    // desplegar incidencias

    const handleClickDesplegar = (incidencia) =>{
        setDesplegar(incidencia)
    }

    const handleClickCerrar = ()=>{
        setDesplegar(null)
    }


   return (

        <div className="incidencias_pendientes">

            <p id='incidencias_pendientes'>{titulo}</p>

            <table className="table">

                <thead>
                    <tr>
                    <th id='titulo_id' scope="col">ID</th>
                    <th id='titulo_titulo' scope="col">Título</th>
                    <th id='titulo_fecha' scope="col">Fecha</th>
                    

                    
                    </tr>
                </thead>
                <tbody>
                    {incidencias.map((incidencia)=>(

                        <tr key={incidencia.id_incidencia}>
                            <td className='linea'>{incidencia.id_incidencia} </td> 
                            <td className='linea2' onClick={()=>handleClickDesplegar(incidencia)} >{incidencia.titulo}</td>
                            <td className='linea'>{incidencia.fecha}</td>
                            
                        </tr>
                    )
                    
                    )}
                    
                </tbody>
            </table>

            {desplegar &&
            
            <div className="desplegar_incidencia">

                <Desplegar_incidencia 
                    id_incidencia= {desplegar.id_incidencia}
                    titulo={desplegar.titulo}
                    descripcion={desplegar.descripcion}
                    fecha={desplegar.fecha}
                    usuario={desplegar.usuario}
                    departamento={desplegar.departamento}
                    handleClickCerrar={handleClickCerrar}
                />
                

            </div>
            
            }          



        </div>
   )
}
export default Incidencias_pendientes;