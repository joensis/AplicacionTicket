import '../../../../css/principal_admin/central_admin/incidencias/desplegar_incidencia.css';


const Desplegar_incidencia = ({id_incidencia, titulo, descripcion, fecha, usuario, departamento, handleClickCerrar}) =>{





    return (

<>

        <div className="desplegar">

                <div className='desplegar_informacion'>

                    <div className='usuario_id_info'>
                        <span>Usuario</span>
                        <p>{usuario}</p>
                        <span>ID incidencia</span>
                        <p>{id_incidencia}</p>
                        <span>Fecha</span>
                        <p>{fecha}</p>
                        <span>Departamento</span>
                        <p>{departamento}</p>
                    </div>
                
                    <span>Título</span>
                    <p id='titulo'>{titulo}</p>
                


                
                    <span>Descripción</span>
                    <p id='descripcion'>{descripcion}</p>
                
                </div>

                <button  id='cerrar_desplegar' onClick={handleClickCerrar}>Cerrar</button>

                
            









        </div>

        {/* <table className="tabla_desplegar" id='desplegar'>

                        <thead>
                            <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Título</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Descripción</th>
                            <th scope="col">Usuario</th>
                            <th scope="col"></th>
                            

                            </tr>
                        </thead>
                        <tbody>
                            

                            

                            <tr>
                                <td className='linea'>{id_incidencia} </td> 
                                <td className='linea'>{titulo}</td>
                                <td className='linea'>{fecha}</td>
                                <td className='linea'>{descripcion}</td>
                                <td className='linea'>{usuario}</td>
                                
                            </tr>
                            

                           

                            
                                                     
                        </tbody> 
                    </table>
 */}


</>
    )


}

export default Desplegar_incidencia;