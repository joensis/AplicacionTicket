import '../../../css/principal_user/central_user/central_user.css';

import Incidencias_pendientes from './Incidencias_pendientes';
import Nueva_incidencia from './Nueva_incidencia';
import Incidencias_resueltas from './Incidencias_resueltas';
import Incidencias_nuevas from './Incidencias_nuevas';




const Central_user = ({id_user, usuario, cerrar_mis_incidencias}) =>{

    return (
        <>
            <div className="central_user">

                <p>Incidencias</p>
                {/* <Nueva_incidencia id_user= {id_user} usuario={usuario}/> */}
                <Incidencias_nuevas id_user={id_user} usuario={usuario} url_php={"http://localhost/incidencias/incidencias_nuevas.php"}/>
                <Incidencias_pendientes titulo={"Incidencias en resolución"} id_user= {id_user} usuario={usuario} url_php={"http://localhost/incidencias/incidencias_pendientes.php"}/>
                <Incidencias_resueltas id_user= {id_user} usuario={usuario} url_php={"http://localhost/incidencias/incidencia_resuelta_user.php"}/>
            
                <div><button id='boton_cierra_incidencias' onClick={cerrar_mis_incidencias} >Cerrar</button></div>
            </div>

            
        </>
    )

}

export default Central_user;