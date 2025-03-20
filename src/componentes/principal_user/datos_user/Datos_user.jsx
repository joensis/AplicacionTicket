import '../../../css/principal_user/datos_user/datos_user.css';
import CerrarSesion from '../../login/CerrarSesion';
import { useState } from 'react';
import { useNavigate } from 'react-router';


const Datos_user = ({ id_user, usuario }) => {

    const [cierreSesion, setCierreSesion] = useState(false);

    const cerrarSesion = () => {

        setCierreSesion(true);
    }

    const cancelarCierreSesion = () => {
        setCierreSesion(false);
    }

    const navigate = useNavigate();

    const ConfirmarCerrarSesion = () => {
        sessionStorage.removeItem('user');

        navigate("/");

    }


    return (



        <div className='datos_user'>

            <div className='cajaLogo'>
                <img src="/public/img/logoTrans.png" alt="" /></div>

            <div className="nombreUsuario">
                {usuario}
            </div>


            <div className="cajaCierre">
                <button onClick={cerrarSesion} >Cerrar sesión</button>
            </div>


            {cierreSesion &&
                <CerrarSesion cierreSesion={ConfirmarCerrarSesion} cancelarCierreSesion={cancelarCierreSesion} />
            }

        </div>








    )

}
export default Datos_user;