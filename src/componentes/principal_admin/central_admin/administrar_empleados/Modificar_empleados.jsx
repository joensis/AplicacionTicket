import { useState } from 'react';
import '../../../../css/principal_admin/central_admin/administrar_empleados/modificar_empleados.css'


const Modificar_empleados = ({cerrar_modificar_empleados, editEmpleado}) => {

    
  const [mensajeNombre, setMensajeNombre] = useState({
    mensaje: '',
    color:''
    
  })

  const [mensajeApellidos, setMensajeApellidos] = useState({
    mensaje: '',
    color:''
    
  })

  const [mensajeDepartamento , setMensajeDepartamento] = useState({
    mensaje: '',
    color:''
    
  })
  const [mensajeEmail, setMensajeEmail] = useState({
    mensaje: '',
    color:''
    
  })

  const [modificarEmpleado, setModificarEmpleado] = useState({
        editEmpleadoId:'',
        editEmpleadoNombre:'',
        editEmpleadoApellidos:'',
        editEmpleadoDepartamento:'',
        editEmpleadoEmail:''
    })

    // manejar estados del formulario de modificacion 
    const handleChangeEmpleado = (e) =>{
        const {name, value} = e.target;
            setModificarEmpleado({...modificarEmpleado, [name]:value});
    } 

// modificar datos 
 // cambiar nombre
const handleClickEditarNombre = async (e) =>{
    e.preventDefault();

  const requestOptions = {
    method: "post",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ nombreEmpleado: modificarEmpleado.editEmpleadoNombre, id: editEmpleado.id })
  }

  try{

    const response = await fetch('http://localhost/incidencias/edit_nombre_empleado.php', requestOptions);
    const data = await response.json();

    if (response.ok && data.status === "ok") {
      setMensajeNombre({ mensaje: "Cambio realizado", color: "green" });
      console.log(mensajeNombre.mensaje);
    } else {
      setMensajeNombre({ mensaje: "Problema en el cambio de nombre", color: "red" });
    }

  }catch (error) {
    console.error('Error al mandar los datos', error);
    setMensajeNombre({ mensaje: "Error al mandar los datos", color: "red" });
  }

}

//cambiar apellidos
const handleClickEditarApellidos = async (e) =>{
    e.preventDefault();

    const requestOptions = {
      method: "post",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ apellidosEmpleado: modificarEmpleado.editEmpleadoApellidos, id: editEmpleado.id })
    }
  
    try{
  
      const response = await fetch('http://localhost/incidencias/edit_apellidos_empleado.php', requestOptions);
      const data = await response.json();
  
      if (response.ok && data.status === "ok") {
        setMensajeApellidos({ mensaje: "Cambio realizado", color: "green" });
      } else {
        setMensajeApellidos({ mensaje: "Problema en el cambio de nombre", color: "red" });
      }
  
    }catch (error) {
      console.error('Error al mandar los datos', error);
      setMensajeApellidos({ mensaje: "Error al mandar los datos", color: "red" });
    }

}

//cambiar departamento 
const handleClickEditarDepartamento = async (e) =>{
    e.preventDefault();

    const requestOptions = {
      method: "post",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ departamentoEmpleado: modificarEmpleado.editEmpleadoDepartamento, id: editEmpleado.id })
    }
  
    try{
  
      const response = await fetch('http://localhost/incidencias/edit_departamento_empleado.php', requestOptions);
      const data = await response.json();
  
      if (response.ok && data.status === "ok") {
        setMensajeDepartamento({ mensaje: "Cambio realizado", color: "green" });
      } else {
        setMensajeDepartamento({ mensaje: "Problema en el cambio de nombre", color: "red" });
      }
  
    }catch (error) {
      console.error('Error al mandar los datos', error);
      setMensajeDepartamento({ mensaje: "Error al mandar los datos", color: "red" });
    }

}

//cambiar email
const handleClickEditarEmail = async (e) =>{
    e.preventDefault();

    const requestOptions = {
      method: "post",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ emailEmpleado: modificarEmpleado.editEmpleadoEmail, id: editEmpleado.id })
    }
  
    try{
  
      const response = await fetch('http://localhost/incidencias/edit_email_empleado.php', requestOptions);
      const data = await response.json();
  
      if (response.ok && data.status === "ok") {
        setMensajeEmail({ mensaje: "Cambio realizado", color: "green" });
      } else {
        setMensajeEmail({ mensaje: "Problema en el cambio de nombre", color: "red" });
      }
  
    }catch (error) {
      console.error('Error al mandar los datos', error);
      setMensajeEmail({ mensaje: "Error al mandar los datos", color: "red" });
    }

}

return (

    <>
    <div className="principal_modificar_empleados">
      
      
        <p id='titulo_modificar_empleados' >Modificar datos del empleado</p>
          <div className="empleado_elegido">

            <form>

              {/* informacion del usuario */}

              <div className="idEmpleado">
                <label>ID de empleado:</label>
                <input
                  type="text"
                  value={editEmpleado.id} readOnly
                  
                />
              </div>
                  
              <div className="nombreEmpleado">
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" 
                id="nombre"
                value={editEmpleado.nombre} readOnly />

              </div>

              
              <div className="apellidosEmpleado">
                <label htmlFor="apellidos">Apellidos:</label>
                <input
                  type="text"
                  id="apellidos"
                  value={editEmpleado.apellidos} readOnly
                />
              </div>
              <div className='contenedor_depar_email'>
                <div className="departamentoEmpleado">
                  <label htmlFor="departamento">Departamento: </label>
                  <input
                    type="text"
                    id="departamento"
                    value={editEmpleado.departamento} readOnly
                  />
                </div>

                <div className="emailEmpleado">
                  <label htmlFor="email">Email: </label>
                  <input
                    type="text"
                    id="email"
                    value={editEmpleado.email} readOnly
                  />
                </div>
                </div>

            </form>

        </div>

        {/* editar usuario */}
        <hr />
        <div /* className="formulario_editar_empleado" */>

          <form className="editar_datos_empleados">

            <label htmlFor="ditEmpleadoNombre">Nombre de empleado</label>
            <input type="text" name="editEmpleadoNombre" id="editEmpleadoNombre" value={modificarEmpleado.editEmpleadoNombre} onChange={handleChangeEmpleado}/> <button onClick={handleClickEditarNombre} >Cambiar Nombre de cliente</button>
            <div className="mensajeNombre"  style={{color: mensajeNombre.color}}>{mensajeNombre.mensaje}</div>

            <label htmlFor="editEmpleadoApellidos">Apellidos</label>
            <input type="text" name="editEmpleadoApellidos" id="eeditEmpleadoApellidos" value={modificarEmpleado.editEmpleadoApellidos} onChange={handleChangeEmpleado}/><button onClick={handleClickEditarApellidos} >Cambiar Apellidos</button>
            <div className="mensajeApellidos"  style={{color: mensajeApellidos.color}}>{mensajeApellidos.mensaje}</div>

            <div className='contenedor_depar_email'>

            <div className='editar_departamento_empleado'>
              <span>Departamento</span>
                <div className='desplegar_departamento'>
                    <select name="departamento" id="departamento" value={modificarEmpleado.editEmpleadoDepartamento} onChange={handleChangeEmpleado} required>
                        <option value="" disabled>Seleccione un departamento</option> 
                        <option value="desarrollo">Desarrollo</option>
                        <option value="sistema">Sistema</option>
                        <option value="ventas">Ventas</option>
                        <option value="atencion al cliente">Atención al cliente</option>
                    </select>
                    <button onClick={handleClickEditarDepartamento} >Cambiar Departamento</button>
            </div>
                </div>
               {/*  <label htmlFor="editEmpleadoDepartamento">Departamento</label>
                <input type="text" name="editEmpleadoDepartamento" id="editEmpleadoDepartamento" value={modificarEmpleado.editEmpleadoDepartamento} onChange={handleChangeEmpleado}/><button onClick={handleClickEditarDepartamento} >Cambiar Departamento</button>
                <div className="mensajeDepartamento"  style={{color: mensajeDepartamento.color}} >{ mensajeDepartamento.mensaje}</div> */}

                <div className='editar_email_empleado'>
                  <span>Email</span>
                  <input type="email" name="editEmpleadoEmail" id="editEmpleadoEmail" value={modificarEmpleado.editEmpleadoEmail} onChange={handleChangeEmpleado}/><button onClick={handleClickEditarEmail} >Cambiar Email</button>
                  <div className="mensajeEmail"  style={{color: mensajeEmail.color}} >{ mensajeEmail.mensaje}</div>
                </div>
            </div>
          </form>

          <button className="cerrar_modificar" onClick={cerrar_modificar_empleados} >Cerrar</button>

        </div>
          
    </div>
      
    </>
)



}
export default Modificar_empleados;