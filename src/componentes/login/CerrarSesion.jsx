import '../../css/login/cerrarSesion.css';


const CerrarSesion = ({cierreSesion, cancelarCierreSesion}) =>{

    return (

        <div className='cierre_sesion' >
            <p>¿Desea cerrar sesión?</p>
            <div className='botones_cierre_sesion' >
                <button id='boton_cierre' onClick={cierreSesion} >Sí</button>
                <button  id='boton_cierre' onClick={cancelarCierreSesion} >No</button>
            </div>

        </div>
    )


}

export default CerrarSesion;