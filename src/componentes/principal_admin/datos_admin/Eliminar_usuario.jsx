import '../../../css/principal_admin/central_admin/administrar_usuarios/eliminar_usuario.css';

const Eliminar_usuario = ({cerrar_eliminar_usuario, eliminar_usuario}) =>{



    return (
        <div className='eliminar_usuario'>

            <p>¿Desea eliminar usuario?</p>

            <div className='botones_eliminar_usuario'>
                <button onClick={eliminar_usuario} >Si</button>
                <button onClick={cerrar_eliminar_usuario} >No</button>    
            </div>



        </div>
    )
}
export default Eliminar_usuario;