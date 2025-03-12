import '../../../css/principal_admin/datos_admin/crear_usuario.css';
import { useState } from 'react';

const Crear_usuario = ({cerrar_crear_usuario}) => {

    const [mostrarContrasena, setMostrarContrasena] = useState(false);
    const [repetirContrasena, setRepetirContrasena] = useState('');
    const [formData, setFormData] = useState({

        usuario:'',
        cliente:'',
        contrasena:''
    })


    const cambiarVisibilidadContraseña = () => {

        setMostrarContrasena(!mostrarContrasena);
    }

    const handleChange = (e) =>{
        const {name, value} = e.target;
        if (name === 'usuario' || name === 'cliente' || name === 'contrasena'){
            setFormData({...formData, [name]:value});
        } else if(name === 'repetir_contrasena'){
            setRepetirContrasena(value);
        }
        
    }


    const handleSubmit = (e) => {

        e.preventDefault();

        if (formData.contrasena !== repetirContrasena){
            const mensajeDevuelto = document.getElementById('mensajeDevuelto');
            mensajeDevuelto.textContent = 'Las contraseñas no coinciden.';
            mensajeDevuelto.style.color = 'red';
            return; // Salir de la función si las contraseñas no coinciden

        }
        
        const requestOptions = {

            method: 'POST',
            header: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)

        }
        fetch('http://localhost/incidencias/crear_usuario.php', requestOptions)
            .then(response => response.json())
            .then(data => {

                const mensajeDevuelto = document.getElementById("mensajeDevuelto");

                if (data.status == "ok") {
                    mensajeDevuelto.textContent = "Usuario registrado correctamente.";
                    mensajeDevuelto.style.color = "green";


                    setFormData({         // volvemos a resetear el formulario a vacio
                        usuario: '',
                        cliente: '',
                        contrasena
                    });
                    setRepetirContrasena('');
                }
                
                else {
                    mensajeDevuelto.texContent = "Error en el registro del usuario.";
                    mensajeDevuelto.style.color = "red";
                }

            })
            .catch((error) => {


                console.error('Error:', error);
                const mensajeDevuelto = document.getElementById('mensajeDevuelto');
                mensajeDevuelto.textContent = "Error de conexión con el servidor.";
                mensajeDevuelto.style.color = "red";

                setFormData({         // volvemos a resetear el formulario a vacio
                    usuario: '',
                    cliente: '',
                    contrasena: ''
                });
                setRepetirContrasena('');
            })


    }




    return (
        <>
        <div className='formulario_crear'>

            <form className="form_principal" id='formulario_usuario' onSubmit={handleSubmit}>

                <p id='crear_usuario'>Crear usuario</p>

                <div className="form-group">

                    <label htmlFor="usuario">Usuario</label>
                    <input
                        type="text"
                        className="form-control"
                        value={formData.usuario}
                        onChange={handleChange}
                        name="usuario"
                        id="usuario"
                        required />

                </div>

                <div className="form-group">

                    <label htmlFor="cliente">Cliente</label>
                    <input
                        type="text"
                        className="form-control"
                        value={formData.cliente}
                        onChange={handleChange}
                        name="cliente"
                        id="cliente"
                        required />

                </div>

                <div className="form-group">

                    <label htmlFor="contrasena">Contraseña</label>
                    <input
                    
                        type= {mostrarContrasena? 'text' : 'password'}
                        className="form-control"
                        value={formData.contrasena}
                        onChange={handleChange}
                        name="contrasena"
                        id="contrasena"
                        required />
                        <div className='check_contraseña' >

                            <input id='caja_check'  type="checkbox" onChange={cambiarVisibilidadContraseña} />
                            <label htmlFor="">Mostrar contraseña{/* {mostrarContrasena ? "Ocultar contraseñas" : "Mostrar contraseñas"} */}</label>

                        </div>
                        
                </div>

                <div className="form-group">

                    <label htmlFor="contrasena">Repetir contraseña</label>
                    <input
                        type= {mostrarContrasena? 'text' : 'password'}
                        className="form-control"
                        value={repetirContrasena}
                        onChange={handleChange}
                        name='repetir_contrasena'
                        id="repetir_contrasena"
                        required />
                        
                        
                        
                </div>

                <p id='mensajeDevuelto'></p>

                <button id='boton_enviar_usuario' type="submit" className="btn btn-primary">Enviar</button>

                

            </form>
                            <button className='cerrar_crear_usuario' onClick={cerrar_crear_usuario} >Cerrar</button>

            


        </div>
            


        </>




    )

}
export default Crear_usuario;