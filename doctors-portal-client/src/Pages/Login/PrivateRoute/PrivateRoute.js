import { CircularProgress } from '@mui/material';
import React from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

// const PrivateRoute = ({children, ...rest}) => {
//     const {user,isLoading}=useAuth();
//     if(isLoading){return <CircularProgress />}
//     return (
//         <Route
//         {...rest}
//         render={({ location }) =>
//           user.email ? (
//             children
//           ) : (
//             // <Navigate
//             <Navigate to="/" state={{ from: location }} replace />
//             //   to={{
//             //     pathname: "/login",
//             //     state: { from: location }
//             //   }}
//             // />
//           )
//         }
//       />
//     );
// };

// export default PrivateRoute;



const PrivateRoute = () => {
    const auth = null; // determine if authorized, from context or however you're doing it

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return auth ? <Outlet /> : <Navigate to="/login" />;
}
export default PrivateRoute;