export function getEnv(tagName: string, defaultValue?: string) {
    const prefix = 'REACT_APP_';
    const parsedTag = prefix + tagName;
    if (!process.env[parsedTag] && !defaultValue) {
        throw new Error('Env not found and has no defaultValue');
    }
    return process.env[parsedTag] || defaultValue;
}
