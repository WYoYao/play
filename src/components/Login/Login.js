import React from 'react';
import styles from './Login.less';
import { Layout, Input, Button } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

function Login(login) {

  let {
    dispatch,
    username,
    password
  } = login;
  // 用户名称 密码输入
  const handleInput = function (name, e) {

    let action = {
      type: 'login/handlerInput',
    };

    action[name] = e.target.value;
    if (name == "username") {
      action.password = password;
    } else if (name == "password") {
      action.username = username;
    }

    dispatch(action)
  }

  // 点击登录
  const handleSubmit = function () {
    debugger;
    dispatch({
      type: 'login/login',
      username,
      password,
    })
  }

  return (
    <Layout>
      <Content className={styles.content}>
        <div className={styles.contenter}>
          <div className={styles.title}>Login</div>
          <div className={styles.item}>
            <div>
              账户：
                </div>
            <div>
              <Input type="text" value={username} onChange={handleInput.bind(null, 'username')} />
            </div>
          </div>
          <div className={styles.item}>
            <div>
              密码：
                </div>
            <div>
              <Input type="password" value={password} onChange={handleInput.bind(null, 'password')} />
            </div>
          </div>
          <div className={styles.bottom}><Button onClick={handleSubmit} type="primary">提交</Button></div>
        </div>
      </Content>
    </Layout>
  );
}

export default Login;
