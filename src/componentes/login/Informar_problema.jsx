import { useState } from 'react';
import '../../css/login/informar_problema.css';

const informar_problema = ({cerrar_problema}) => {

    const [formData, setFormData] = useState({
        problemaUsuario:'',
        problemaPrioridad:'',
        problemaTitulo:'',
        problemaDescripcion:''
    })

    const [mensajeProblema, setMensajeProblema] = useState({
        texto:'',
        color:''
    })

    function handleChange (e){

        const {name, value} = e.target;
        
        setFormData({ ...formData, [name]: value })
        
    }

    function handleSubmitProblemas(e){

        e.preventDefault();
        console.log("Enviando datos:", formData);
        const requestOptions = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
    
        }
        fetch('http://localhost/incidencias/incidencia_cliente.php', requestOptions)
            .then(response => response.json())
            .then(data => {

                if (data.status == "ok") {
                    setMensajeProblema({texto:'Incidencia enviada correctamente', color:'green'})
                    setFormData({         // volvemos a resetear el formulario a vacio
                        problemaUsuario: '',
                        problemaPrioridad:'',
                        problemaTitulo: '',
                        problemaDescripcion:''
                        
                    });
                }
                
                else {
                    setMensajeProblema({texto:'Error en el envio de la incidencia', color:'red'});
                }

            })
            .catch((error) => {


                console.error('Error:', error);
                
                setMensajeProblema({texto:'Error con la conexión con la base de datos', color:'red'});
                

                setFormData({         // volvemos a resetear el formulario a vacio
                    problemaUsuario: '',
                    problemaPrioridad:'',
                    problemaTitulo: '',
                    problemaDescripcion:''
                });
            })


    }




    return (
        <div className='informar_problema'>

            <form className='formulario_problema' onSubmit={handleSubmitProblemas} action="">

            <div className='contenedor_nombre_nivel'>
                <div className='informar_problema_usuario'>
                    <label htmlFor="problema_usuario" required>Nombre de usuario</label>
                    <input type="text" 
                    name="problemaUsuario" 
                    id="problema_usuario" 
                    value={formData.problemaUsuario}
                    onChange={handleChange}
                    />
                </div>
                <select name="problemaPrioridad" id="prioridad" value={formData.problemaPrioridad} onChange={handleChange} required>
                        <option value="" disabled>Seleccione prioridad</option> 
                        <option value="alta">Alta</option>
                        <option value="media">Media</option>
                        <option value="baja">Baja</option>
                </select>
            </div>
                <div className='informar_problema_titulo'>
                    <label htmlFor="problema_titulo">Título</label>
                    <input type="text" 
                    name='problemaTitulo' 
                    id='problema_titulo' 
                    value={formData.problemaTitulo} 
                    onChange={handleChange}
                    /> 
                </div>
                
                <div className='informar_problema_descripcion'>
                    <label htmlFor="problema_descripcion">Descripción</label>
                    <textarea 
                    name='problemaDescripcion' 
                    id='problema_descripcion' 
                    value={formData.problemaDescripcion}
                    onChange={handleChange}
                    />
                </div>
                <button type='submit'>Enviar</button>
            </form>
            <div className='mensajeProblema' style={{color:mensajeProblema.color}} >{mensajeProblema.texto}</div>
            <div className='cerrar_informar_problema'>
                <button onClick={cerrar_problema} >Cerrar</button>
            </div>
        </div>

    )
}

export default informar_problema;