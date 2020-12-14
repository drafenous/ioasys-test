export function ls(type: 'set' | 'get' | 'remove', key: string, data?: object | Array<any>) {
    if (type === 'set') {
        if (data === undefined) {
            throw new Error(`Invalid data: ${data}`);
        }
        const parse = JSON.stringify(data);
        localStorage.setItem(key, parse);
    }

    if (type === 'get') {
        if (!key) {
            throw new Error(`Invalid key: ${key}`);
        }
        const lsItem = localStorage.getItem(key) || '{}';
        const response = JSON.parse(lsItem);
        return response;
    }

    if (type === 'remove') {
        if (!key) {
            throw new Error(`Invalid key: ${key}`);
        }
        localStorage.removeItem(key);
    }
}

export function initialsGenerator(str: string) {
    return str.split(' ').map(n => n.charAt(0).toUpperCase()).join('')
}

export function startWithSlash(str: string) {
    return str.charAt(0) === '/' ? str : '/' + str;
}
