import { HttpClient } from 'helpers';
import { IHttpClient } from 'interfaces';

interface SearchService {
    search: (search: string) => Promise<any | string>;
    showEnterprise: (search: string) => Promise<any | string>;
}

async function search(search: string) {
    const params: IHttpClient = {
        url: `/api/v1/enterprises?enterprise_types=1&name=${search}`,
        method: 'GET',
    };

    const promise = await HttpClient(params)
        .then((response) =>
            response.json().then((data) => {
                return data.enterprises;
            })
        )
        .catch((res) => {
            return new Error(res);
        });

    return promise;
}

async function showEnterprise(id: string) {
    const params: IHttpClient = {
        url: `/api/v1/enterprises/${id}`,
        method: 'GET',
    };

    const promise = await HttpClient(params)
        .then((response) =>
            response.json().then((data) => {
                return data;
            })
        )
        .catch((res) => {
            return new Error(res);
        });

    return promise;
}

export const searchService: SearchService = { search, showEnterprise };
