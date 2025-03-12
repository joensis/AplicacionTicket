import '../../../css/principal_admin/central_admin/central_admin.css';
import Botones from './botones/Botones';
import Desplegar_incidencia from './incidencias/Desplegar_incidencias';
import Incidencias from './incidencias/Incidencias';
import { useState } from 'react';



const Central_admin = ({cerrar_incidencias}) =>{

    const [infoChildNuevas, setInfoChildNuevas] = useState('');  //recibir informacion del contador de nuevas
    const [infoChildPendientes, setInfoChildPendientes] = useState('');
    const [infoChildResueltas, setInfoChildResueltas] = useState('');

    const handleChildNuevas = (dataChild)=>{               //cambiar el estado con la informacion del contador nuevas
        setInfoChildNuevas(dataChild)
    } 

    const handleChildPendientes = (dataChild)=>{            //cambiar el estado con la informacion del contador pendientes
        setInfoChildPendientes(dataChild)
    }

    const handleChildResueltas = (dataChild)=>{            //cambiar el estado con la informacion del contador resueltas
        setInfoChildResueltas(dataChild)
    }


    return(

        <div className='central_admin'>

                {/* <Botones contNuevas={infoChildNuevas} contPendientes={infoChildPendientes} contResueltas={infoChildResueltas} /> */}
                <Incidencias contInfoNuevas={handleChildNuevas} contInfoPendientes={handleChildPendientes} contInfoResueltas={handleChildResueltas} cerrar_incidencias2={cerrar_incidencias}
                contNuevas={infoChildNuevas} contPendientes={infoChildPendientes} contResueltas={infoChildResueltas}
                />
               
               
               
        </div>


    )

}
export default Central_admin;