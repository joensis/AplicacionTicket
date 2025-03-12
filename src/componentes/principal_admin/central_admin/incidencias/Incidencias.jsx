import { json } from 'react-router-dom';
import '../../../../css/principal_admin/central_admin/incidencias/incidencias.css';
import { useState, useEffect } from 'react';
import Desplegar_incidencia from './Desplegar_incidencias';
import Botones from '../botones/Botones';


const Incidencias = ({contInfoNuevas, contInfoPendientes, contInfoResueltas, cerrar_incidencias2, contNuevas, contPendientes, contResueltas}) => {

    const [incidencias, setIncidencias] = useState([]);    //dar estado a la tabla de nuevas incidencias 
    const [pendientes, setPendientes] = useState([]);       //dar estado a la tabla de incidenias pendientes
    const [resueltas, setResueltas] = useState([]);
    const [eliminar, setEliminar] = useState([]);
    const [desplegar, setDesplegar] = useState(null);  //estado para desplegar incidencias






    // hacer peticiones a la api php y recibir informacion

    const fetchIncidencias = async () => {

        try {

            const responseNuevas = await fetch('http://localhost/incidencias/incidencias_nuevas_admin.php');
            const nuevas = await responseNuevas.json();

             // Formatear las fechas nuevas
            const nuevasFormateadas = nuevas.map((incidencia) => {
                const date = new Date(incidencia.fecha);
                incidencia.fecha = date.toLocaleDateString('es-ES'); // Formato d/m/Y
                return incidencia;
        });

            const responsePendientes = await fetch('http://localhost/incidencias/incidencias_pendientes_admin.php');
            const pendientes = await responsePendientes.json();

             // Formatear las fechas pendientes
            const pendientesFormateadas = pendientes.map((incidencia) => {
                const date = new Date(incidencia.fecha);
                incidencia.fecha = date.toLocaleDateString('es-ES'); // Formato d/m/Y
                return incidencia;
            });


            const responseResueltas = await fetch('http://localhost/incidencias/incidencias_resueltas_admin.php');
            const resueltas = await responseResueltas.json();

            // Formatear las fechas resueltas
            const resueltasFormateadas = resueltas.map((incidencia) => {
                const date = new Date(incidencia.fecha);
                incidencia.fecha = date.toLocaleDateString('es-ES'); // Formato d/m/Y
                return incidencia;
            });


            setIncidencias(nuevasFormateadas);
            setPendientes(pendientesFormateadas);
            setResueltas(resueltasFormateadas);

        } catch (error) {
            console.log("Error al obtener las incidencias:");
        }

    }


    useEffect(() => {   // hook para actualizar la información cuando se producen cambios
        fetchIncidencias();
    }, []);



    //mandar incidencia a "pendientes"

    const handleClickPendientes = async (id_incidencia) => {


        // Realizar la solicitud DELETE a la API para eliminar la incidencia
        const response = await fetch('http://localhost/incidencias/estado_incidencias_pendientes.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify({ id_incidencia: id_incidencia }),
        });

        const result = await response.json();




        // Verificar si la solicitud fue exitosa

        if (result.status === "ok") {

            console.log('Datos modificados');
            fetchIncidencias();    // actualizar la tabla despues de clicar

        } else {

            throw new Error('Error al mandar los datos');
        }


    }


    // mandar incidencia a resueltas

    const handleClickResueltas = async (id_incidencia) => {



        const response = await fetch('http://localhost/incidencias/estado_incidencias_resueltas.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify({ id_incidencia: id_incidencia }),
        });

        const result = await response.json();



        // Verificar si la solicitud fue exitosa

        if (response.ok && result.status === "ok") {

            console.log('Datos modificados');
            fetchIncidencias();

        } else {

            throw new Error('Error al mandar los datos');
        }


    }





    // eliminar incidencia

    const handleClickEliminar = async (id_incidencia) => {



        const response = await fetch('http://localhost/incidencias/eliminar_incidencia.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify({ id_incidencia: id_incidencia }),
        });

        const result = await response.json();


        // Verificar si la solicitud fue exitosa

        if (response.ok && result.status === "ok") {

            console.log('Datos enviados');
            fetchIncidencias();

        } else {

            throw new Error('Error al mandar los datos');
        }


    }


    // desplegar incidencia

    const handleClickDesplegar = (incidencia) => {
        setDesplegar(incidencia);
    }

    const handleClickCerrar = () => {
        setDesplegar(null);
    }

    
    // actualizar el contador con la longitud del array de incidencias nuevas

    useEffect(() => {
        contInfoNuevas(incidencias.length);
    }, [incidencias, contInfoNuevas]);

 // actualizar el contador con la longitud del array de incidencias pendientes

 useEffect(() => {
    contInfoPendientes(pendientes.length);
}, [pendientes, contInfoPendientes]);

// actualizar el contador con la longitud del array de incidencias resueltas

useEffect(() => {
    contInfoResueltas(resueltas.length);
}, [resueltas, contInfoResueltas]);

    return (

        <>
       
        <div className='grupo_incidencias'>
            <Botones contNuevas={contNuevas} contPendientes={contPendientes} />
            <div className="incidencias_nuevas">

                <p className='titulo_incidencias'>Nuevas incidencias</p>

                <table className="table" id='nuevas'>

                    <thead>
                        <tr>
                            <th  id='titulo_id' scope="col">ID</th>
                            <th  id='titulo_titulo' scope="col">Título</th>
                            <th  id='titulo_fecha' scope="col">Fecha</th>
                            <th  id='titulo_usuario' scope="col">Usuario</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>

                    <tbody>
                        {incidencias.map((incidencia) => (
                                
                           
                            
                            <tr key={incidencia.id_incidencia}>

                                <td className='linea'>{incidencia.id_incidencia}</td>
                                <td className='linea2' onClick={() => handleClickDesplegar(incidencia)} >{incidencia.titulo}</td>
                                <td className='linea'>{incidencia.fecha}</td>
                                <td className='linea'>{incidencia.usuario}</td>
                                <td><button id='procesar' onClick={() => handleClickPendientes(incidencia.id_incidencia)}>Procesar</button></td>
                                
                            </tr>

                            
                            
                        )
                        

                        )}

                    </tbody>
                </table>



            </div>

            <div className="incidencias_pendientes">

                <p className='titulo_incidencias'>Incidencias pendientes</p>

                <table className="table" id='pendientes'>

                    <thead>
                        <tr>
                            <th id='titulo_id' scope="col">ID</th>
                            <th id='titulo_titulo' scope="col">Título</th>
                            <th id='titulo_fecha' scope="col">Fecha</th>
                            <th id='titulo_usuario' scope="col">Usuario</th>
                            <th scope="col"></th>
                            

                        </tr>
                    </thead>
                    <tbody>


                        {pendientes.map((pendiente) => (
                                
                            <tr key={pendiente.id_incidencia}>
                                <td className='linea'>{pendiente.id_incidencia} </td>
                                <td className='linea2' onClick={() => handleClickDesplegar(pendiente)} >{pendiente.titulo}</td>
                                <td className='linea'>{pendiente.fecha}</td>
                                {/* <td className='linea'>{pendiente.descripcion}</td> */}
                                <td className='linea'>{pendiente.usuario}</td>
                               
                                <td><button className='boton_resuelta'  id='resuelta' onClick={() => handleClickResueltas(pendiente.id_incidencia)}>Resuelta</button></td>
                            </tr>
                        )

                        )}



                    </tbody>
                </table>




            </div>

            <div className="incidencias_resueltas">

                <p className='titulo_incidencias'>Incidencias Resueltas</p>
                
                <table className="table" id='resueltas'>

                    <thead>
                        <tr>
                            <th id='titulo_id'  scope="col">ID</th>
                            <th id='titulo_titulo' scope="col">Título</th>
                            <th id='titulo_fecha' scope="col">Fecha</th>
                            {/* <th scope="col">Descripción</th> */}
                            <th id='titulo_usuario' scope="col">Usuario</th>
                            {/* <th scope="col"></th>
                            <th scope="col"></th> */}

                        </tr>
                    </thead>
                    <tbody>


                        {resueltas.map((resuelta) => (

                            <tr key={resuelta.id_incidencia}>
                                <td className='linea'>{resuelta.id_incidencia} </td>
                                <td className='linea2' onClick={() => handleClickDesplegar(resuelta)} >{resuelta.titulo}</td>
                                <td className='linea'>{resuelta.fecha}</td>
                                {/* <td className='linea'>{resuelta.descripcion}</td> */}
                                <td className='linea'>{resuelta.usuario}</td>
                                
                                <td><button id='resuelta' onClick={() => handleClickEliminar(resuelta.id_incidencia)}>Eliminar</button></td>
                            </tr>
                        )

                        )}



                    </tbody>
                </table>


                {desplegar &&

                    <div className="desplegar_incidencia">

                        <Desplegar_incidencia
                            id_incidencia={desplegar.id_incidencia}
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
                <div className='boton_cerrar_incidencias'>
                    <button className='cerrar_incidencias' onClick={cerrar_incidencias2} >Cerrar Incidencias</button>
                </div>
                

        </div>
           
        </>

    )


}

export default Incidencias;