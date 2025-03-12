import '../../css/login/login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Datos_user from '../principal_user/datos_user/Datos_user';
import Informar_problema from './Informar_problema';



const Login = () => {

    const navigate = useNavigate();


    // declarar el estado inicial del formulario

    const [formData, setFormData] = useState({
        usuario: "",
        contrasena: ""
    })

    const [mensajeError, setMensajeError] = useState('');

    const [abrirProblemas, setAbrirProblemas] = useState(false);


    // manejar el cambio de estado del formulario

    function handleChange(e) {

        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })

    }

    const handleAbrirProblemas = () => {
        setAbrirProblemas(true);
    }

    const handleCerrarProblemas = () => {
        setAbrirProblemas(false);
    }

    // manejar la peticion a la API php para el login 

    function handleSubmit(e) {

        e.preventDefault();
        const requestOptions = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)

        }
        fetch("http://localhost/incidencias/login.php", requestOptions)
            .then(response => response.json())
            .then((data) => {

                switch (data.mensaje) {

                    case "admin":
                        var id_user = data.id_user;
                        var usuario = data.usuario;
                        sessionStorage.setItem("user", JSON.stringify({ id_user, usuario, role: "admin" }));
                        navigate('/principal_admin', { state: { id_user, usuario } });
                        break;

                    case "usuario":
                        var id_user = data.id_user;
                        var usuario = data.usuario;
                        sessionStorage.setItem("user", JSON.stringify({ id_user, usuario, role: "usuario" }));
                        navigate('/principal_user', { state: { id_user, usuario } });
                        break;

                    case "error":
                        navigate('/');
                        setMensajeError("Error al introducir las credenciales");
                        break;

                    default:
                        alert("Respuesta desconocida del servidor");
                        break;
                }
            }
            )



    }

    return (


        <>

            <div className='logo_login'><img src="./img/logoTrans.png" alt="" /></div>
            <form className="form-login" id='formulario_login' onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="usuario">USUARIO</label>
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
                    <label htmlFor="contrasena">CONTRASEÑA</label>
                    <input
                        type="password"
                        className="form-control"
                        value={formData.contrasena}
                        onChange={handleChange}
                        name="contrasena"
                        id="contrasena"
                        required />
                </div>
                <div className='mensaje_error_credenciales'>{mensajeError}</div>
                <div className='botones_login' >
                    <button type="submit" className="btn btn-primary">Entrar</button>
                    <button id='informar_problema' type='button' onClick={handleAbrirProblemas}>Informar de un problema</button>
                </div>
            </form>

            {abrirProblemas &&
                <Informar_problema cerrar_problema={handleCerrarProblemas} />

            }




        </>





    )
}

export default Login;