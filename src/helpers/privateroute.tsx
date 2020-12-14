import { Redirect, Route } from 'react-router-dom';
import { ls } from './common';

export const PrivateRoute = ({ component: Component, ...rest }): any => {
    return (
        <Route
            {...rest}
            render={(props) => {
                const hasSession = !!ls('get', 'session').accessToken;
                return hasSession ? <Component {...props} /> : <Redirect to="/" />;
            }}
        />
    );
};
