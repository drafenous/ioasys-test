import { IHttpClient } from 'interfaces';
import { ls } from './common';
import { getEnv } from './getenv';

export const HttpClient = ({ url, method, body, headers }: IHttpClient) => {
    const parsedURL = getEnv('BASE_URL') + url;

    const defaultHeader = new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...headers,
    });

    const session = ls('get', 'session');
    if (session) {
        defaultHeader.append('access-token', session.accessToken);
        defaultHeader.append('client', session.client);
        defaultHeader.append('uid', session.uid);
    }

    const init = {
        method,
        headers: defaultHeader,
        body,
    };

    return fetch(parsedURL, init);
};
