import React from 'react';
import { LoginRoutes } from './login.routes';
import { Switch, Route } from 'react-router-dom';

export const LoginRouter: React.FC = () => {
    return (
        <Switch>
            <Route path={LoginRoutes.Login.route} component={LoginRoutes.Login.component} />
        </Switch>
    );
};
