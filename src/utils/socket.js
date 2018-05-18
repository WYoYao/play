
import { isString } from 'lodash';
import * as socketTypeEnum from './socketTypeEnum';
let socket = null;

function getSocket() {
    let bot = window.localStorage.getItem('botData');
    bot = isString(bot) && bot.length ? bot : void 0;
    if (socket) return socket;

    socket = io.connect('localhost:3000');
    socket.emit(socketTypeEnum.loginType, bot);
    if (window.localStorage.getItem)
        return socket;
}


export default {
    getSocket
}
