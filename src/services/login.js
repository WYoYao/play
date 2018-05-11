import request from '../utils/request';

export function login({
    username,
    password,
}) {

    return request('/api/login', {
        username,
        password,
    });
}

export function getlogin() {
    return request('/api/getLoginImage', {
    });
}
