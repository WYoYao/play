import { getSocket } from '../utils/socket';

export function listen(action) {
    let socket = getSocket();
    socket.on('qrcode', (data) => {
        action(data);
    });
}

