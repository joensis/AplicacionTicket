import { useState } from 'react';
import '../../../../css/principal_admin/central_admin/administrar_empleados/editar_empleado.css';
import Modificar_empleados from './Modificar_empleados';

const Editar_empleado = ({cerrar_editar_empleado}) =>{
    
    const [empleado, setEmpleado] = useState(''); //estado del formulario de empleado
    const [sugerencia, setSugerencia] = useState([]); //estado de la sugerencia
    const [editEmpleado, setEditEmpleado] = useState({   //estado de la eleccion del empleado
        id: '', 
        nombre: '',
        apellidos:'',
        departamento:'',
        email:''
    })
    const [abrirModificarEmpleados, setAbrirModificarEmpleados] = useState(false);


// abrir modificar empleados

    /* const handleClickAbrirModificarEmpleados = () => {
        setAbrirModificarEmpleados(true);
    } */
    const handleClickCerrarModificarEmpleados = () => {
        setAbrirModificarEmpleados(false);
    }
    
    // manejar el cambio en el formulario de 'empleado'

    const handleChange = (e) => {

        const { value } = e.target;
        setEmpleado(value);

        //hacer una solicitud al servidor para obtener coincidencias

        if (value.length > 2) {
            fetch('http://localhost/incidencias/buscar_empleado.php', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ empleado: value })
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

    // seleccionar empleado 

    const handleEmpleadoClick = (empleadoSeleccionado) =>{
        setEmpleado(empleadoSeleccionado)
       
        setSugerencia([]);
    } 
    
     // buscar empleado con la sugerencia elegida
     const handleBuscarEmpleadoClick =(e) =>{
        setAbrirModificarEmpleados(true);
        e.preventDefault();

        const requestOptions = {
            method: "post",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({empleado: empleado})
        }
        
        fetch('http://localhost/incidencias/editar_empleado.php', requestOptions)
        .then(response => response.json())
        .then(data=>{
            setEditEmpleado({
                id: data.id || '', 
                nombre: data.nombre || '', 
                apellidos: data.apellidos || '',
                departamento: data.departamento || '',
                email:data.email
            })
        })
        .catch(error=>{
            console.error('Error obteniendo los datos:', error)
        })
        /* setAbrir_editar_usuario(true); */


    }
    
    
    return (

        <>
        <div className='editar_empleado'>

            <form className='formulario_editar_empleado'>
                <label htmlFor="buscar_empleado">Buscar empleado</label>
                <input
                type="text" 
                id='buscar_empleado'
                name='buscar_empleado'
                value={empleado}
                onChange={handleChange}
                />

                {sugerencia.length > 0 && (
                    <ul className='sugerencias'>
                    {sugerencia.map((sug, index) => (
                    <li key={index} onClick={()=>handleEmpleadoClick(sug)}> {sug} </li>
                    ))}
                    </ul>
                
                )}

                <button className='lista_empleados'>Lista de empleados</button>
                <button type='button' onClick={handleBuscarEmpleadoClick} >Buscar empleado</button>


            </form>
            

            <button  id='boton_cerrar_editar_empleado' onClick={cerrar_editar_empleado} >Cerrar</button>

        </div>
        
        {abrirModificarEmpleados &&
            <Modificar_empleados cerrar_modificar_empleados= {handleClickCerrarModificarEmpleados} editEmpleado={editEmpleado} />
        }
        
        
        
        </>




    )
}

export default Editar_empleado;