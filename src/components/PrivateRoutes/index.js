import { Navigate, Outlet } from "react-router-dom";
import { getCookie } from '../../helpers/cookie';

function PrivateRouters() {
   const token = getCookie('token');
   // console.log(token);
   return (

      <>
         {token ? <Outlet /> : <Navigate to='/login' />}
      </>
   )
}

export default PrivateRouters;