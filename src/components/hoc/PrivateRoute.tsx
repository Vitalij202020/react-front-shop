import React, {FC} from 'react';
import {Navigate} from "react-router"
import {useTypedSelector} from "../../hooks/useTypedSelector";

interface PrivateRouteProps {
    component: React.FC
    roles: Array<string>
}


const PrivateRoute: FC<PrivateRouteProps> = ({component: Component, roles}) => {
    const {userInfo, isAuth} = useTypedSelector(state => state.userLogin)

    if(!isAuth) {
        return <Navigate to='/login'/>
    }

    const result = userInfo?.roles.some((role) =>
        roles.includes(role.value),
    );

    if (result) {
        return <Component/>
    }
    return <Navigate to='/'/>
};

export default PrivateRoute;


