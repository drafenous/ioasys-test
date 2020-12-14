export interface IHttpClient {
    url: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    body?: any;
    headers?: any;
}
