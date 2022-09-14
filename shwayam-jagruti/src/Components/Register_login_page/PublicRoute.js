import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { isLogin } from '../utils';

const PublicRoute = ({component: Component, restricted, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            isLogin() && restricted ?
                <Navigate to="/Dashboard" />
            : <Component {...props} />
        )} />
    );
};

export default PublicRoute;
