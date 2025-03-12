import { useState } from 'react';
import '../../../../css/principal_admin/central_admin/administrar_empleados/administrar_empleados.css';
import Crear_empleado from './Crear_empleado';
import Editar_empleado from './Editar_empleado';

const Administrar_empleados = ({cerrar_admin_empleados}) => {

    const [abrir_crear_empleado, setAbrir_crear_empleado] = useState(false);

    const handleClickAbrirCrearEmpleado = () =>{
        setAbrir_crear_empleado(true);
    }
    
    
    const handleClickCerrarCrearEmpleado = () =>{
        setAbrir_crear_empleado(false);
    }



    const [abrirEditarEmpleado, setAbrir_editar_empleado] = useState(false);

    const handleClickAbrirEditarEmpleado = () =>{
        setAbrir_editar_empleado(true);
    }

    
    const handleClickCerrarEditarEmpleado = () =>{
        setAbrir_editar_empleado(false);
    }


return (

    <div className='administrar_empleados'>

        <div className='elegir_administrar_empleados' >
            <div className='crear_empleado'>
                <button onClick={handleClickAbrirCrearEmpleado} >Crear empleado</button>
            </div>


            <div className='editar_empleados'>

                <button onClick={handleClickAbrirEditarEmpleado} >Editar empleado</button>
            </div>

            <button  id='cerrar_administrar_empleados' onClick={cerrar_admin_empleados} >Cerrar</button>
        </div>

        {abrir_crear_empleado &&
        <Crear_empleado cerrar_crear_empleado  = {handleClickCerrarCrearEmpleado} />        
        }

        {abrirEditarEmpleado &&
        <Editar_empleado cerrar_editar_empleado = {handleClickCerrarEditarEmpleado} />
        }

    </div>

   





)

}

export default Administrar_empleados;