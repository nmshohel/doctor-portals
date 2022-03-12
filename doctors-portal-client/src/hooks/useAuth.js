import { useContext } from "react";

// import from AuthProvider.j 
import {AuthContext} from '../contexts/AuthProvider/AuthProvider'

const useAuth=()=>{
    const auth=useContext(AuthContext)
    return auth;

}
export default useAuth;