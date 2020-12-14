import React, { useEffect, useState } from 'react';
import { Assets } from 'assets';
import { LoginForm, useLoader } from 'components';
import { LoginInterface } from 'interfaces';
import { useHistory } from 'react-router-dom';
import { authService } from 'services';
import { EnterprisesRoutes } from 'modules/enterprises/enterprises.routes';
import './login.styles.css';

export const LoginModule: React.FC = () => {
    const [error, setError] = useState<string>();
    const [data, setData] = useState<object>();

    const history = useHistory();
    const { setIsLoading } = useLoader();

    const handleSignin = (values: LoginInterface) => {
        setIsLoading(true);

        const auth = authService.login(values);
        auth.then((response) => {
            if (typeof response === 'string') {
                setData(undefined);
                setError(response);
                setIsLoading(false);
            } else {
                setError(undefined);
                setData(response);
                setIsLoading(false);
            }
        });
    };

    useEffect(() => {
        if (data && !error) {
            history.push(EnterprisesRoutes.Enterprises.route);
        }
    }, [data, error, history]);

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-auto">
                    <img src={Assets.logo['1x']} alt="Logo - Ioasys" className="logo-home" />
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-sm-12 col-md-4">
                    <div className="welcome">
                        BEM-VINDO AO
                        <br />
                        EMPRESAS
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-sm-12 col-md-4">
                    <div className="welcome-message">
                        Lorem ipsum dolor sit amet, contetur
                        <br />
                        adipiscing elit. Nunc accumsan.
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-sm-12 col-md-4 px-sm-2 px-md-4">
                    <LoginForm onSubmit={handleSignin} errorMessage={error} />
                </div>
            </div>
        </div>
    );
};
