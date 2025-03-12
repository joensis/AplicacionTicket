import '../../../../css/principal_admin/central_admin/administrar_empleados/crear_empleado.css';
import { useState } from 'react';

const Crear_empleado = ({cerrar_crear_empleado}) =>{

    const [formEmpleado, setFormEmpleado] = useState({

        nombreEmpleado:'',
        apellidoEmpleado:'',
        departamento:'',
        emailEmpleado:''
    })

    const [mensajeRecibido, setMensajeRecibido] = useState({
        texto: '',
        color:''
    });

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormEmpleado({...formEmpleado, [name]:value});
        
    }

    const handleSubmit = (e) => {

        e.preventDefault();

        const requestOptions = {

            method: 'POST',
            header: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formEmpleado)

        }
        fetch('http://localhost/incidencias/crear_empleado.php', requestOptions)
            .then(response => response.json())
            .then(data => {

                if (data.status == "ok") {
                    setMensajeRecibido({texto:'Empleado creado correctamente', color:'green'})
                    setFormEmpleado({         // volvemos a resetear el formulario a vacio
                        nombreEmpleado: '',
                        apellidoEmpleado: '',
                        departamento:'',
                        emailEmpleado:''
                    });
                }
                
                else {
                    setMensajeRecibido({texto:'Error en la creación del empleado', color:'red'});
                }

            })
            .catch((error) => {


                console.error('Error:', error);
                
                setMensajeRecibido('Error de conexión con la base de datos');
                

                setFormEmpleado({         // volvemos a resetear el formulario a vacio
                    nombreEmpleado: '',
                    apellidoEmpleado: '',
                    departamento:'',
                    emailEmpleado:''
                });
            })


    }




return (
    <div className='crear_nuevo_empleado'>
        <p>Crear nuevo empleado</p>
        <form className='form_crear_empleado' onSubmit={handleSubmit}>

            <div className='nombreEmpleado'>
                <label htmlFor="nombreEmpleado">Nombre </label>
                <input type="text"
                onChange={handleChange}
                className='nombreEmpleado' 
                id='nombreEmpleado'
                value={formEmpleado.nombreEmpleado}
                name='nombreEmpleado'
                required/>
            </div>


            <div className='apellidoEmpleado'>
                <label htmlFor="apellidoEmpleado">Apellido </label>
                <input type="text" 
                onChange={handleChange}
                className='apellidoEmpleado'
                id='apellidoEmpleado' 
                value={formEmpleado.apellidoEmpleado}
                name='apellidoEmpleado'
                required/>
            </div>



            <span>Departamento</span>
                <div className='desplegar_departamento'>
                    <select name="departamento" id="departamento" value={formEmpleado.departamento} onChange={handleChange} required>
                        <option value="" disabled>Seleccione un departamento</option> 
                        <option value="desarrollo">Desarrollo</option>
                        <option value="sistema">Sistema</option>
                        <option value="ventas">Ventas</option>
                        <option value="atencion al cliente">Atención al cliente</option>

                    </select>
                </div>


           

            <div className='emailEmpleado'>
                <label htmlFor="emailEmpleado">Email </label>
                <input type="email" 
                onChange={handleChange}
                className='emailEmpleado'
                id='emailEmpleado' 
                value={formEmpleado.emailEmpleado}
                name='emailEmpleado'
                required/>
            </div>

            <button id='boton_enviar_crear' type='submit'>Enviar</button>
            <p className='mensaje_recibido' style={{color:mensajeRecibido.color}} >{mensajeRecibido.texto}</p>
        </form>

        <button  id='boton_cerrar_enviar' onClick={cerrar_crear_empleado} >Cerrar</button>

    </div>



)





}
export default Crear_empleado;