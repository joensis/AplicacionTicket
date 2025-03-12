import '../../css/principal_admin/principal_admin.css';
import Central_admin from './central_admin/Central_admin';
import Datos_admin from './datos_admin/Datos_admin';
import { useLocation } from 'react-router-dom';
import Login_admin from './Login_admin';

const Principal_admin = () => {

    const location = useLocation();
    const { id_user, usuario } = location.state || {};

    return(

        <div className='principal_admin'>

            

            <Datos_admin id_usuario={id_user} usuario={usuario} />
            <Login_admin id_usuario={id_user} usuario={usuario}/>
           {/*  <Central_admin id_usuario={id_user} usuario={usuario} /> */}

        </div>
            
        
    )

}



export default Principal_admin;