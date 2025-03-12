import '../../css/principal_admin/login_admin.css';
import { useState } from 'react';
import Central_admin from './central_admin/Central_admin';
import Administrar_usuarios from './central_admin/administrar_usuarios/Administrar_usuarios';
import Administrar_empleados from './central_admin/administrar_empleados/Administrar_empleados';








const Login_admin = ({id_usuario, usuario}) => {

    
    
    const [abrir_incidencias, setAbrirIncidencias] = useState(false); // abrir incidencias
    
    const handleClickIncidencias = () => {
        setAbrirIncidencias(true);
        
    }

    const handleClickCerrarIncidencias = () =>{
        setAbrirIncidencias(false);
    }

    
    
    
    const [abrir_admin_usuarios, setAbrir_admin_usuarios] = useState(false);  //abrir administracion usuarios

    const handleClickAdminUsuarios = () => {
        setAbrir_admin_usuarios(true);
    }

    const handleClickCerrarAdminUsuarios = () => {
        setAbrir_admin_usuarios(false);

    }

    const [abrir_empleados, setAbrir_empleados] = useState(false);

    const handleClickAbrirEmpleados = () =>{
        setAbrir_empleados(true);
    }

    const handleClickCerrarEmpleados = () =>{
        setAbrir_empleados(false);
    }


    return (

       <>
            

            <div className='principal_elegir'>

                <div className="elegir_opcion">

                    <p className='titulo'>seleccionar opción</p>
                    <div className="elegir_incidencias">
                            <p className='seleccionar_opcion'  onClick={handleClickIncidencias} ><img id='logo_informes' src="./img/informes.png" alt="" />   Incidencias</p>
                            <p>Administrar las incidencias recibidas.</p>
                    </div>
                        
                    <div className="elegir_usuarios">
                        <p className='seleccionar_opcion' onClick={handleClickAdminUsuarios} ><img id='logo_usuarios' src="./img/usuario.png" alt="" />   Administración de usuarios</p>
                        <p>Administrar la creación y la modificación de usuarios.</p>
                    </div>
                        
                    <div className="elegir_empleados">
                            <p className='seleccionar_opcion' onClick={handleClickAbrirEmpleados} ><img id='logo_empleados' src="./img/empleado.png" alt="" />   Administración de empleados</p>
                            <p>Administrar la creación y la modificación de empleados.</p>
                    </div>
                    

                </div>




            </div> 

                
           

            {abrir_incidencias &&
            
            <Central_admin cerrar_incidencias={handleClickCerrarIncidencias}/>
            
            }

            {abrir_admin_usuarios &&
            <Administrar_usuarios cerrar_admin_usuarios={handleClickCerrarAdminUsuarios}/>

            }

            { abrir_empleados &&
            <Administrar_empleados cerrar_admin_empleados = {handleClickCerrarEmpleados}/>
                
            }
       
       </> 
        


    )
}
export default Login_admin;