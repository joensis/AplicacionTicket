import { useState } from 'react';
import '../../../css/principal_admin/datos_admin/datos_admin.css';
import Crear_usuario from './Crear_usuario';
import Login_administrar_usuario from './Login_administrar_usuario';
import { useNavigate } from 'react-router-dom';
import CerrarSesion from '../../login/CerrarSesion';


const Datos_admin = () =>{

    const [cierreSesion, setCierreSesion] = useState(false);
    
    const cerrarSesion = () =>{
        
        setCierreSesion(true);
    }

    const cancelarCierreSesion = () =>{
        setCierreSesion(false);
    }
    
    
    
    const navigate = useNavigate();

    const ConfirmarCerrarSesion = () =>{
        sessionStorage.removeItem('user');

        navigate("/");

    }
    
    
    
    return (
<>
    
    
    
     <div className='datos_usuario' id='datos_usuario'>

        <div className='cajaLogo'>
            <img className='logo' src="/public/img/logo.png" alt="" />
        </div>

        <div className='nombreUsuario'>
            Administrador
        </div>

        <div className='cajaCierre'>
            <button onClick={cerrarSesion} >Cerrar sesión</button>
        </div>

    </div> 
    
    {cierreSesion && 
        <CerrarSesion cierreSesion = {ConfirmarCerrarSesion} cancelarCierreSesion= {cancelarCierreSesion}/>
    }
 </>   
    )


}

export default Datos_admin;




    