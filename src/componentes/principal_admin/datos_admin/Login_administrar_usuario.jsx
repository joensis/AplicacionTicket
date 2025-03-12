import '../../../css/principal_admin/datos_admin/login_administrar_usuario.css'
import { useState } from 'react';
import Editar_usuarios from './Editar_usuarios';
import Lista_clientes from './Lista_clientes';



const Login_administrar_usuario = ({adminUsuario, cerrar_admin_usuarios}) => {

    const [cliente, setCliente] = useState('');              // estado del formulario para la busqueda
    const [sugerencia, setSugerencia] = useState([]);        // estado para las sugerenicas en la busqueda
    const [editCliente, setEditCliente] = useState({         // estado para modificar cliente


        ID: '',
        usuario: '',
        contrasena: '',
        cliente: ''

    })

    const [abrir_editar_usuario, setAbrir_editar_usuario] = useState(false);   //estado para abrir el editor de clientes
    const [listaClientes, setListaClientes] = useState([]);
    const [abrirListaClientes, setAbrirListaClientes] = useState(false);




 // manejar el cambio en el formulario de 'cliente'

    const handleChange = (e) => {

        const { value } = e.target;
        setCliente(value);


        //hacer una solicitud al servidor para obtener coincidencias

        if (value.length > 2) {
            fetch('http://localhost/incidencias/buscar_cliente.php', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ cliente: value })
            })
            .then(response=>response.json())
            .then(data=>{
                setSugerencia(data)
            })
            .catch(error=>{
                console.error("Error en la petición:", error)
            })
            
        } else{
            setSugerencia([]);  // Limpiar las sugerencias si no hay suficientes caracteres
        }
    }

    
//elegir cliente entre las sugerencias

        const handleClienteClick = (clienteSeleccionado) =>{
            setCliente(clienteSeleccionado)
           
            setSugerencia([]);
        }   

        // buscar cliente con la sugerencia elegida
        const handleBuscarClienteClick =(e) =>{
            e.preventDefault();

            const requestOptions = {
                method: "post",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({cliente: cliente})
            }
            
            fetch('http://localhost/incidencias/administrar_usuario.php', requestOptions)
            .then(response => response.json())
            .then(data=>{
                setEditCliente({
                    ID: data.id_usuario || '', 
                    usuario: data.usuario || '', 
                    contrasena: data.contrasena || '',
                    cliente: data.cliente || ''
                })
            })
            .catch(error=>{
                console.error('Error obteniendo los datos:', error)
            })
            setAbrir_editar_usuario(true);


        }

// abrir lista de clientes

const handleAbrirListaClientes = () =>{
    setAbrirListaClientes(true);
}

const handleCerrarListaClientes = () =>{
    setAbrirListaClientes(false);
}

// abrir el editor de clientes

        const handleClickAbrir_editar_usuario =()=>{
            setAbrir_editar_usuario(true);
        }

// cerrar el editor de clientes
        const handleClickCerrar_editar_usuario = () =>{
            setAbrir_editar_usuario(false);
            
        }

//lista de clientes

        const handleListaClientes =  () =>{

            fetch('http://localhost/incidencias/lista_clientes.php')
            .then((response) => response.json())
            .then((data) => {
              if (data.status === 'ok') {
                setListaClientes(data.listaClientes); // Guardamos los usuarios en el estado
              } else {
                console.log('No se pudieron obtener los usuarios');
              }
            })
            .catch((error) => {
              console.error('Error al obtener los usuarios', error);
            });
        };
        






        




    return (



        <>
            <div className='buscar_cliente'>

                <div className='formulario_buscar_cliente' >
                    <form className='buscarCliente' onSubmit={(e)=>e.preventDefault()}>
                        <label htmlFor="Buscarcliente">Cliente</label>
                        <input
                            type="text"
                            name='Buscarcliente'
                            id='Buscarcliente'
                            value={cliente}
                            onChange={handleChange}
                        />

                        {sugerencia.length > 0 && (
                        <ul className='sugerencias'>
                            {sugerencia.map((sug, index) => (
                            <li key={index} onClick={()=>handleClienteClick(sug)}> {sug} </li>
                            ))}
                        </ul>

                        )}      
                        <button className='boton_lista_clientes' onClick={()=>{handleListaClientes(); handleAbrirListaClientes();}} >Lista de clientes</button>
                        <button className='boton_buscar_cliente' type='button' onClick={handleBuscarClienteClick} >Buscar cliente</button>
                    </form>
                </div>

                

                
                <button className='boton_cerrar_buscar_cliente' onClick={cerrar_admin_usuarios}>Cerrar</button>

                {abrir_editar_usuario &&

                    <div className='abrir_editar_usuario'>
                    <Editar_usuarios editCliente={editCliente} setAbrir_editar_usuario={setAbrir_editar_usuario}  cerrar_editar_usuario={handleClickCerrar_editar_usuario}/>
                    
                    </div>

                }
                {abrirListaClientes &&
                <Lista_clientes cerrar_lista_clientes={handleCerrarListaClientes} listaClientes={listaClientes} editCliente={editCliente} setEditCliente={setEditCliente}/>
                }

            </div>







            {/* formulario cambio de datos de clientes */}

            {/*  <div className="cliente_elegido">
            <form>
                <div className='id'>
                
                    <label htmlFor='id'>ID:</label>
                    <input type="text" value={editCliente.ID}readOnly id='id'/>
                    
                    
                
                
                
                </div>
                
                <div className='cambiarUsuario'>

                    <label htmlFor='cambiarUsuario'>Usuario:</label>
                    <input type="text" value={editCliente.usuario}readOnly />
                    
                    <label htmlFor="cambia_id">Cambiar Usuario:</label>
                    <input type="text" value={cambioUsuario} onChange={handleChangeUsuario}/><button  onClick={handleCambiarUsuarioClick} >Cambiar</button>
                    <div className='mensaje' style={{color: mensaje.color}}>{mensaje.texto}</div>


                </div>
                
                    <label>
                        Contraseña:
                        <input type="text" value={editCliente.contrasena}readOnly />
                    </label>
                    <label>
                        Cliente:
                        <input type="text" value={editCliente.cliente}readOnly />
                    </label>
            </form>
        </div> */}







        </>

    )
}


export default Login_administrar_usuario;