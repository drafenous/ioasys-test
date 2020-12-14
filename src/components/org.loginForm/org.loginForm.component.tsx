import { Button } from 'components';
import { Input } from 'components/mol.input';
import { validate } from 'helpers';
import { LoginInterface } from 'interfaces';
import React, { ChangeEvent, useState } from 'react';
import './org.loginForm.styles.css';

interface LoginFormProps {
    onSubmit: (values: LoginInterface) => void;
    errorMessage?: string;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, errorMessage }) => {
    const [values, setValues] = useState({
        email: '',
        password: '',
    });
    const [invalidForm, setInvalidForm] = useState<boolean>(false);

    const handleEmail = (event: ChangeEvent<HTMLInputElement>) => {
        setValues({ email: event.currentTarget.value, password: values.password });
        setInvalidForm(false);
    };

    const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setValues({ email: values.email, password: event.currentTarget.value });
        setInvalidForm(false);
    };

    const handleOnSubmit = () => {
        onSubmit(values);
        setInvalidForm(!!!errorMessage);
    };

    return (
        <>
            <div className="row justify-content-center">
                <Input
                    name="email"
                    type="email"
                    placeholder="E-mail"
                    icon="email"
                    autoComplete="off"
                    onChange={handleEmail}
                    validations={[validate.email]}
                    invalidForm={invalidForm}
                    required
                />
                <Input
                    name="password"
                    type="password"
                    placeholder="Senha"
                    icon="lock"
                    autoComplete="off"
                    onChange={handlePassword}
                    invalidForm={invalidForm}
                    required
                />
                {errorMessage && <div className="error">{errorMessage}</div>}
            </div>
            <div>
                <div className="row justify-content-center">
                    <div className="col-12">
                        <Button onClick={handleOnSubmit} colorPalette="aqua" block disabled={invalidForm}>
                            Entrar
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};
