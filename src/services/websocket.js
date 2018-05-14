import { getSocket } from '../utils/socket';

export function listen(type, action) {
    let socket = getSocket();
    socket.on(type, (data) => {
        action(data);
    });
}

