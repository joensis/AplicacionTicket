import { useState, useEffect } from "react";
import "../../../css/principal_admin/datos_admin/editar_usuarios.css";
import Eliminar_usuario from "./Eliminar_usuario";

const Editar_usuarios = ({editCliente, abrir_editar_usuario, setAbrir_editar_usuario, cerrar_editar_usuario}) => {
//estados para cambiar los datos del cliente


const [cambioCliente, setCambioCliente] = useState({
    editCliente: '',
    editUsuario: '',
    editContrasena: ''
});

  //estado para el mensaje de modificación correcto

  const [mensajeCliente, setMensajeCliente] = useState({
    texto:'',
    color:''
}); 
  
  const [mensajeUsuario, setMensajeUsuario] = useState({
    texto:'',
    color:''
}); 

  const [mensajeContrasena, setMensajeContrasena] = useState({
        texto:'',
        color:''
}); 

const [abrirEliminarUsuario, setAbrirEliminarUsuario] = useState(false);
const [mensajeEliminarUsuario, setMensajeEliminarUsuario] = useState({
  texto:'',
  color:''
})


const handleAbrirEliminarUsuario = () =>{
  setAbrirEliminarUsuario(true);
}

const handleCerrarEliminarUsuario = () =>{
  setAbrirEliminarUsuario(false);
}


// manejar el estado del input de cambio de usuario
const handleChangeUsuario = (e) =>{
    const {name, value} = e.target;
        setCambioCliente({...cambioCliente, [name]:value});
} 
// cambiar cliente 

const handleCambiarClienteClick = async (e) =>{
  e.preventDefault();

  const requestOptions = {
    method: "post",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ cambioCliente: cambioCliente.editCliente, id: editCliente.ID })
  }

  try{

    const response = await fetch('http://localhost/incidencias/editarCliente.php', requestOptions);
    const data = await response.json();

    if (response.ok && data.status === "ok") {
      setMensajeCliente({ texto: "Cambio de cliente realizado", color: "green" });
    } else {
      setMensajeCliente({ texto: "Problema en el cambio de cliente", color: "red" });
    }

  }catch (error) {
    console.error('Error al mandar los datos', error);
    setMensajeCliente({ texto: "Error al mandar los datos", color: "red" });
  }

}




 // cambiar usuario

 const handleCambiarUsuarioClick = async (e) =>{
  e.preventDefault();

  const requestOptions = {
    method: "post",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ cambioCliente: cambioCliente.editUsuario, id: editCliente.ID })
  }

  try{

    const response = await fetch('http://localhost/incidencias/editarUsuario.php', requestOptions);
    const data = await response.json();

    if (response.ok && data.status === "ok") {
      setMensajeUsuario({ texto: "Cambio de usuario realizado", color: "green" });
    } else {
      setMensajeUsuario({ texto: "Problema en el cambio de usuario", color: "red" });
    }

  }catch (error) {
    console.error('Error al mandar los datos', error);
    setMensajeUsuario({ texto: "Error al mandar los datos", color: "red" });
  }

}
 
// cambiar contraseña

const handleCambiarContrasenaClick = async (e) =>{
  e.preventDefault();

  const requestOptions = {
    method: "post",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ cambioCliente: cambioCliente.editContrasena, id: editCliente.ID })
  }

  try{

    const response = await fetch('http://localhost/incidencias/editarContrasena.php', requestOptions);
    const data = await response.json();

    if (response.ok && data.status === "ok") {
      setMensajeContrasena({ texto: "Cambio de la contraseña realizado", color: "green" });
    } else {
      setMensajeContrasena({ texto: "Problema en el cambio de la contraseña", color: "red" });
    }

  }catch (error) {
    console.error('Error al mandar los datos', error);
    setMensajeContrasena({ texto: "Error al mandar los datos", color: "red" });
  }

}

//funcion para eliminar un usuario 

const handleEliminarUsuario = async () =>{
  const requestOptions = {
    method: "post",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({id: editCliente.ID })
  }
  try{

    const response = await fetch('http://localhost/incidencias/eliminar_usuario.php', requestOptions);
    const data = await response.json();

    if (response.ok && data.status === "ok") {
      setMensajeEliminarUsuario({ texto: "Usuario eliminado", color: "green" });
      setAbrirEliminarUsuario(false);
      
    } else {
      setMensajeEliminarUsuario({ texto: "Usuario no eliminado", color: "red" });
    }

  }catch (error) {
    console.error('Error al mandar los datos', error);
    setMensajeEliminarUsuario({ texto: "Error al mandar los datos", color: "red" });
  }

}




  return (
    <>
    <div className="principal_editar_usuario">
    
      <p id="titulo_modificar">Modificar datos del cliente</p>
      <div className="editar_usuario">

        <div className="cliente_elegido">

          <form className="form_editar_cliente">

             {/* informacion del usuario */}

            <div className="id">
              <label htmlFor="id">ID:</label>
              <input
                type="text"
                value={editCliente.ID} readOnly
                id="id"
              />
            </div>

            <div className="cliente">
              <label htmlFor="cliente">Cliente:</label>
              <input type="text" id="cliente"value={editCliente.cliente} readOnly />

            </div>

            
            <div className="NombUsuario">
              <label htmlFor="NombUsuario">Usuario:</label>
              <input
                type="text"
                id="NombUsuario"
                value={editCliente.usuario} readOnly
              />
            </div>

            <div className="contrasena">
              <label htmlFor="contrasena">Contraseña: </label>
              <input
                type="text"
                id="contrasena"
                value={editCliente.contrasena} readOnly
              />
            </div>

          </form>

        </div>
        <div className="mensajeEliminarUsuario"style={{color:mensajeEliminarUsuario.color}} >{mensajeEliminarUsuario.texto}</div>
        <button id="boton_eliminar_usuario" onClick={handleAbrirEliminarUsuario}>Eliminar usuario</button>
        <button className="cerrar_editar" onClick={cerrar_editar_usuario}>Cerrar</button>

        {/* editar usuario */}
  <hr />
        <div className="formulario_editar_usuario">
        <p>Editar datos</p>
          <form className="editar_usuarios">

            <label htmlFor="editCliente">Nombre de cliente</label>
            <input type="text" name="editCliente" id="editCliente" value={cambioCliente.editCliente} onChange={handleChangeUsuario}/> <button onClick={handleCambiarClienteClick} >Cambiar Nombre de cliente</button>
            {<div className="mensajeCliente" style={{color: mensajeCliente.color}}>{mensajeCliente.texto}</div>}

            <label htmlFor="editUsuario">Nombre de usuario</label>
            <input type="text" name="editUsuario" id="editUsuario" value={cambioCliente.editUsuario} onChange={handleChangeUsuario}/><button onClick={handleCambiarUsuarioClick} >Cambiar Nombre de usuario</button>
            <div className="mensajeUsuario" style={{color: mensajeUsuario.color}}>{mensajeUsuario.texto}</div>

            <label htmlFor="editContrasena">Contraseña</label>
            <input type="password" name="editContrasena" id="editContrasena" value={cambioCliente.editContrasena} onChange={handleChangeUsuario}/><button onClick={handleCambiarContrasenaClick} >Cambiar contraseña</button>
            <div className="mensajeContrasena" style={{color: mensajeContrasena.color}}>{mensajeContrasena.texto}</div>
          </form>

          <button className="cerrar_editar" onClick={cerrar_editar_usuario} >Cerrar</button>

        </div>
          
      </div>
      </div>
      {abrirEliminarUsuario &&
      <Eliminar_usuario cerrar_eliminar_usuario={handleCerrarEliminarUsuario} eliminar_usuario={handleEliminarUsuario}/>
      }
    </>
  );
};
export default Editar_usuarios;