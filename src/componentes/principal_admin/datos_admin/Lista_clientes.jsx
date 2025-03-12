import '../../../css/principal_admin/central_admin/administrar_usuarios/lista_clientes.css';
import { useState } from 'react';
import Editar_cliente from './Editar_cliente';

const Lista_clientes = ({listaClientes, cerrar_lista_clientes, editCliente, setEditCliente}) =>{

  /* const [clienteSeleccionado, setClienteSeleccionado] = useState(null); */
  const [abrirEditarCliente, setAbrirEditarCliente] = useState(false);


  const handleClienteSeleccionado = (cliente) => {
    setEditCliente(cliente);  
    handleBuscarClienteClick(cliente); 
  }

  const handleClickCerrarEditarCliente=()=>{
    setAbrirEditarCliente(false);
  }

  // buscar el cliente con el nombre de cliente seleccinado
  const handleBuscarClienteClick =(cliente) =>{
    

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
    setAbrirEditarCliente(true);


}


    return (

        <div className='lista_usuarios'>

          <p>Listado de Clientes</p>
            <div className='listado_usuarios'>
              <ul>
                {listaClientes.length > 0 ? (
                listaClientes.map((cliente, index) => (
                  <li key={index} onClick={()=>handleClienteSeleccionado(cliente)} style={{cursor:'pointer'}} >{cliente}</li>
                ))
              ) : (
                <p>No hay usuarios disponibles.</p>
              )}
            </ul>
          </div>

            <button className='cerrar_lista_clientes' onClick={cerrar_lista_clientes} >Cerrar</button>

              {abrirEditarCliente &&
              <Editar_cliente editCliente={editCliente} cerrar_editar_cliente={handleClickCerrarEditarCliente}/>

              }

        </div>
    )
}
export default Lista_clientes;