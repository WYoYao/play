import request from '../utils/request';

export function login({
    username,
    password,
}) {

    console.log({
        username,
        password,
    });

    return request('/api/users', {
        username,
        password,
    });
}
