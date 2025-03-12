//aqui falla algo 
import { useState } from 'react';
import '../../../../css/principal_admin/central_admin/administrar_usuarios/administrar_usuarios.css';
import Crear_usuario from '../../datos_admin/Crear_usuario';
import Login_administrar_usuario from '../../datos_admin/Login_administrar_usuario';

const Administrar_usuarios = ({cerrar_admin_usuarios}) => {


    const [abrir_crear_usuario, setAbrir_crear_usuario] = useState(false); // abrir crear usuario

    const handleClickAbrirCrearUsuario = () => {
        setAbrir_crear_usuario(true);
    }

    const handleClickCerrarCrearUsuario = () => {
        setAbrir_crear_usuario(false)
    }

    const [abrir_admin_usuarios, setAbrir_admin_usuarios] = useState(false);

    const handleClickAbrirAdminUsuarios = () => {
        setAbrir_admin_usuarios(true);
    }

    const handleClickCerrarAdminUsuarios = () =>{
        setAbrir_admin_usuarios(false);
    }








    return (

        <>
        <div className='principal_administrar_usuarios' >
            <div className='administrar_usuarios'>

                <div className='admin_usu_crear_usuario'>


                    <button onClick={handleClickAbrirCrearUsuario}>Crear usuario</button>


                </div>

                <div className='admin_usu_editar_usuario'>

                    <button onClick={handleClickAbrirAdminUsuarios}>Editar usuario</button>
                </div>
            
                <div className='admin_usu_cerrar_admin_usuario'>
                    <button className='cerrar_admin_usuarios' onClick={cerrar_admin_usuarios} >Cerrar</button>
                </div>


            </div>
        </div>
        {abrir_crear_usuario && (
            <Crear_usuario cerrar_crear_usuario = {handleClickCerrarCrearUsuario} />
            
        )}
        
        {abrir_admin_usuarios &&(
            <Login_administrar_usuario cerrar_admin_usuarios = {handleClickCerrarAdminUsuarios} />
        )

        }
        
        
        </>





    )


}
export default Administrar_usuarios;