import './App.css'
import { Routes, Route, Router} from 'react-router-dom';
import Login from './componentes/login/Login'
import 'bootstrap/dist/css/bootstrap.css'; 
import Principal_admin from './componentes/principal_admin/Principal_admin';
import Principal_user from './componentes/principal_user/Principal_user';
import Login_admin from './componentes/principal_admin/Login_admin';
import Central_admin from './componentes/principal_admin/central_admin/Central_admin';
import PrivateRoute from './componentes/PrivateRoute';






function App() {
  
  return (
    <>
      
      
    <div className='mi_container'>


        <Routes>

        <Route path='/' element={<Login/>}/>
        <Route path='/principal_admin' element={<PrivateRoute allowedRoles={["admin"]}>      <Principal_admin/>      </PrivateRoute>  }/>
        <Route path='/principal_user' element={<PrivateRoute allowedRoles={["usuario"]}>       <Principal_user/>       </PrivateRoute>}/>
        <Route path = '/login_admin' element={<PrivateRoute>          <Login_admin/>         </PrivateRoute>}/>
        {/* <Route path='/central_admin' element={<Central_admin/>}/> */}
                    


        </Routes>


    </div>


    </>
  )
}

export default App
