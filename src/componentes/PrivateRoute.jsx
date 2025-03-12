import { Navigate } from "react-router";

const PrivateRoute= ({children, allowedRoles}) =>{

    const user = JSON.parse(sessionStorage.getItem("user"));

    if (!user){
        return <Navigate to= "/"/>

    }

    const {role} = user;  //extraemos "role" de user

    if(!allowedRoles.includes(role)){
        return <Navigate to= "/"/>
    }

    return children; 
}

export default PrivateRoute;