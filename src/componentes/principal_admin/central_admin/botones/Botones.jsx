import { useEffect, useState } from 'react';
import '../../../../css/principal_admin/central_admin/botones/botones.css';


const Botones = ({contNuevas, contPendientes, contResueltas}) =>{

    const [colorBotonNuevas, setColorBotonNuevas] = useState('white');
    const [colorBotonPendientes, setColorBotonPendientes] = useState('white');

    useEffect(()=>{

        if (contNuevas > 0){
        setColorBotonNuevas('#57cc99');
        } else{
            setColorBotonNuevas('white');
        }

        if (contPendientes > 0){
                setColorBotonPendientes('#f28482');
            } else {
                setColorBotonPendientes('white');
            }
    }, [contNuevas, contPendientes])
    


    return(

        <div className="incidencias">

                <div className="nuevas" style={{backgroundColor: colorBotonNuevas}}>
                    <div>Incidencias nuevas</div> <div className='numeros'>{contNuevas}</div>
                </div>

                <div className="pendientes" style={{backgroundColor: colorBotonPendientes}}>
                    <div>Incidencias pendientes</div> <div className='numeros'>{contPendientes}</div>
                </div>

        </div>


    )


}

export default Botones;