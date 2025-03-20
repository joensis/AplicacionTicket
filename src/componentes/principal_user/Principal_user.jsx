import '../../css/principal_user/principal_user.css';
import Central_user from './central_user/Central_user';
import Datos_user from './datos_user/Datos_user';
import Login from '../login/Login';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import Formulario_incidencia from './central_user/Formulario_incidencia';




const Principal_user = () => {

    const location = useLocation();                        //para manejar los archivos recibidos desde Login.php
    const { id_user, usuario } = location.state || {};

    const [abrirCrearIncidencia, setAbrirCrearIncidencia] = useState(false);
    const [abrirMisIncidencias, setAbrirMisIncidencias] = useState(false);

    const clickAbrirCrearIncidencia = () => {
        setAbrirCrearIncidencia(true);
    }

    const clickCerrarCrearIncidencia = () => {
        setAbrirCrearIncidencia(false);
    }


    const clickAbrirMisIncidencias = () => {
        setAbrirMisIncidencias(true);
    }
    const clickCerrarMisIncidencias = () => {
        setAbrirMisIncidencias(false);
    }



    return (

        <>




            <div className='principal_user'>


                {<Datos_user id_user={id_user} usuario={usuario} />}
                <div className='elegir_user'>

                    <div className='contenedor_elegir' >
                        <p className='titulo_seleccion' >Seleccionar opción</p>
                        <div className='contenedor_crear'>
                            <p className='seleccionar_opcion' onClick={clickAbrirCrearIncidencia} ><img id='logo_informes' src="./img/informes.png" alt="crear incidencia" />  Crear incidencia </p>
                        </div>
                        <div className='contenedor_misIncidencias'>
                            <p className='seleccionar_opcion' onClick={clickAbrirMisIncidencias} ><img id='logo_lista_informes' src="./img/lista_informes.png" alt="mis incidencias" />  Mis incidencias</p>
                        </div>
                    </div>
                    {abrirCrearIncidencia &&
                        <Formulario_incidencia id_user={id_user} usuario={usuario} cerrar_incidencia={clickCerrarCrearIncidencia} />
                    }

                    {abrirMisIncidencias &&
                        <Central_user id_user={id_user} usuario={usuario} cerrar_mis_incidencias={clickCerrarMisIncidencias} />
                    }



                </div>
                {/* <Central_user id_user={id_user} usuario={usuario}/> */}


            </div>






        </>
    )

}
export default Principal_user;