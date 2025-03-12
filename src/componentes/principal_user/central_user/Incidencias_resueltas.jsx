import '../../../css/principal_user/central_user/incidencias_resueltas.css';
import { useState, useEffect } from 'react';
import Desplegar_incidencia from '../../principal_admin/central_admin/incidencias/Desplegar_incidencias';

const Incidencias_resueltas = ({id_user, usuario, url_php }) =>{

    const [resueltas, setResueltas] = useState([]);
    const [desplegar, setDesplegar] = useState(null);


    useEffect (()=>{    // hook que maneja cambios debido a influencias externas

        const fetchIncidencias = async ()=>{

            

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


                setResueltas(incidenciasFormateadas);

            

        }


        fetchIncidencias();

    },[]);



    //desplegar incidencias

    const handleClickDesplegar = (incidencia) =>{
        setDesplegar(incidencia)
    }

    const handleClickCerrar = ()=>{
        setDesplegar(null)
    }









    return (
        
        <div className="incidencias_resueltas">

            <p id='incidencias_resueltas'>Incidencias resueltas</p>

            <table  className="table">

                <thead>
                    <tr>
                    <th id='titulo_id' scope="col">ID</th>
                    <th id='titulo_titulo' scope="col">Título</th>
                    <th id='titulo_fecha' scope="col">Fecha</th>
                    

                    
                    </tr>
                </thead>
                <tbody>
                    {resueltas.map((resuelta)=>(

                        <tr key={resuelta.id_incidencia}>
                            <td className='linea'>{resuelta.id_incidencia} </td> 
                            <td className='linea2' onClick={()=>handleClickDesplegar(resuelta)} >{resuelta.titulo}</td>
                            <td className='linea'>{resuelta.fecha}</td>
                            
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
export default Incidencias_resueltas;