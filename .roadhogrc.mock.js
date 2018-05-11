
/**
 * 返回的通用的信息用于判断接口是否调用成功
 */
class Response {
    constructor(code, message) {
        this.code = code;  // 状态为1 为成功 0为失败
        this.message = message;  // 错误信息
    }
}

/**
 * 个人信息类
 */
class User {
    constructor(argu) {
        return Object.assign({}, {
            // 姓名
            name: 'leo',
            // 年龄
            age: 10,
            // 性别 1男 0女
            sex: 1,
            // 电话号码
            phone: 13366659254,
            // 头像
            avatar: '',
            // 出生日期 直接使用时间戳
            birthday: +new Date(),
            // 权限
            authority: [1, 2, 3, 4, 5],
            // 用戶ID
            userid: "441200",
        }, argu);
    }
}


export default {

    // 支持值为 Object 和 Array
    'GET /api/users': {
        state: new Response(1, ''),
        content: new User(),
    },
    '/api/login': {
        state: new Response(1, ''),
        content: new User(),
    },

    // GET POST 可省略
    '/api/users/1': { id: 1 },

    // 支持自定义函数，API 参考 express@4
    'POST /api/users/create': (req, res) => { res.end('OK'); },
};