import '../../../css/principal_user/central_user/formulario_incidencia.css';
import { useState, useEffect } from 'react';

const Formulario_incidencia = ({id_user, usuario, cerrar_incidencia}) => {
    
    // dar estado al formulario
    const [formData, setFormData] = useState({
        titulo: '',
        descripcion: '',
        departamento:'',
        id_user: id_user,
        usuario: usuario
        
    })

    const [mensajeDevuelto, setMensajeDevuelto] = useState({
        texto:'', 
        color:''
    })
    
    
    
    // manejar el cambio en el formulario
    const handleChange = (e) =>{
        const {name, value} = e.target;
        
            setFormData({...formData, [name]:value});
      
        
    }






    //enviar a php

    const handleSubmit = (e) =>{
        e.preventDefault();

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        }

        fetch("http://localhost/incidencias/incidencias_user.php", requestOptions)

        .then (response=>response.json())
        .then(data=> {

            
    
            if(data.status == "ok"){
                setMensajeDevuelto({texto:"Incidencia registrada correctamente", color:"green"});
                setFormData({         // resetear el formulario a vacio
                    titulo: '',
                    descripcion: '',
                    departamento:''
                });
                
            }
            else{

                setMensajeDevuelto({texto:'Error en el registro de la incidencia', color:'red'})
                
            }

        })

        .catch((error) => {
            

            console.error('Error:', error);
            setMensajeDevuelto({texto:'Error de conexión con el servidor.', color:'red'})
            
            
            setFormData({         // volvemos a resetear el formulario a vacio
                titulo: '',
                descripcion: '',
                departamento:''
            });
        })

    }
// desvanecimiento del mensaje de incidencia enviada

    useEffect(() => {  
        if (mensajeDevuelto.texto) {
            const timer = setTimeout(() => {
                setMensajeDevuelto({texto:'', color:''});
            }, 3000); 

            // Limpiar el temporizador cuando el componente se desmonte o el mensaje cambie
            return () => clearTimeout(timer);
            
        }
    }, [mensajeDevuelto.texto]);
    
    
    
    return (

        <>
        <div className='contenedor-incidencias'> 

           
                <div className='titulo-incidencias'>Nueva Incidencia</div>
                <form className='form-incidencias' onSubmit={handleSubmit}>
                
                    <div className='grupo-incidencias'>
                            <span>Departamento</span>
                            <div>
                                <select name="departamento" id="departamento" value={formData.departamento} onChange={handleChange} required>
                                    <option value="" disabled>Seleccione un departamento</option> 
                                    <option value="desarrollo">Desarrollo</option>
                                    <option value="sistema">Sistema</option>
                                    <option value="ventas">Ventas</option>
                                    <option value="atencion al cliente">Atención al cliente</option>

                            </select>
                            </div>
                    </div>
                    
                    <div className='grupo-incidencias'>
                            <span>Título</span>
                            <div><input 
                            type="text" 
                            value={formData.titulo}
                            onChange={handleChange}
                            className='tituloIncidencia' 
                            name='titulo' 
                            id='titulo'
                            placeholder=' Ingrese título'
                            required/>
                            
                            </div>
                    </div>

                
                    

                    <div className='grupo-incidencias'>

                        <span>Descripción</span>
                        <div><textarea
                        value={formData.descripcion} 
                        onChange={handleChange}
                        className='descripcionIncidencia' 
                        name='descripcion' 
                        id='descripcion'
                        required/></div>
                        
                    </div>

                

                {/* mandar el id del usuario al formulario, oculto */}
                {/* <div className="id_usuario">        
                    <input 
                    type="text" 
                    value={formData.id_user}
                    disabled
                    />
                </div> */}

                {/* mandar el nombre del usuario al formulario, oculto */}
                {/* <div className="usuario"> 
                    <input 
                    type="text" 
                    value={formData.usuario}
                    disabled
                    
                    />
                </div> */}

                    <div className='boton_enviar'>

                        <button type='submit'>Enviar</button>
                    </div>

                    <p id='mensajeDevuelto' style={{color:mensajeDevuelto.color}}>{mensajeDevuelto.texto}</p>
                
                
                
                </form>
            
            <button id='boton_cerrar_incidencia' onClick={cerrar_incidencia} >Cerrar</button>
            </div>
            

                
                

            

        </>




    )
}

export default Formulario_incidencia;