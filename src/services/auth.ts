import { HttpClient, ls } from 'helpers';
import { IHttpClient, LoginInterface } from 'interfaces';

interface AuthService {
    login: (values: LoginInterface) => Promise<object | string>;
}

async function login(values: LoginInterface) {
    const params: IHttpClient = {
        url: '/api/v1/users/auth/sign_in',
        method: 'POST',
        body: JSON.stringify(values),
    };

    const handleComplete = (response, data) => {
        if (data.success) {
            return handleSuccess(response, data);
        } else {
            return handleError(data);
        }
    };

    const handleSuccess = (response, res) => {
        const client = response.headers.get('client');
        const accessToken = response.headers.get('access-token');
        const uid = response.headers.get('uid');

        const session = { accessToken, client, uid };
        ls('set', 'session', session);
        ls('set', 'userData', res);
        return res;
    };

    const handleError = (res) => {
        if (res.errors[0].includes('Invalid login credentials')) {
            return 'Credenciais informadas são inválidas, tente novamente.';
        } else {
            return res.errors[0];
        }
    };

    const promise = await HttpClient(params)
        .then((response) =>
            response.json().then((data) => {
                return handleComplete(response, data);
            })
        )
        .catch((res) => {
            return handleError(res);
        });

    return promise;
}

export const authService: AuthService = { login };
