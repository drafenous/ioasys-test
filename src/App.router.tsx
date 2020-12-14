import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { PrivateRoute } from 'helpers';
import { AppRoutes } from './App.routes';

export const AppRouter: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path={AppRoutes.Login.route} component={AppRoutes.Login.component} />
                <PrivateRoute path={AppRoutes.Enterprises.route} component={AppRoutes.Enterprises.component} />
                <Route path="/" exact>
                    <Redirect to={AppRoutes.Login.route} />
                </Route>
                <Redirect from="*" to="/" />
            </Switch>
        </Router>
    );
};
