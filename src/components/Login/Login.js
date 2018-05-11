import React, { Component } from 'react';
import styles from './Login.less';
import { Layout, Input, Button } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import { isPlainObject } from 'lodash';


export default class Login extends Component {
  constructor(props) {
    super(props);
  }

  // 用户名称 密码输入
  handleInput(name, e) {

    let action = {
      type: 'login/handlerInput',
    };

    action[name] = e.target.value;
    if (name == "username") {
      action.password = this.props.password;
    } else if (name == "password") {
      action.username = this.props.username;
    }

    this.props.dispatch(action)
  }

  // 点击登录
  handleSubmit() {
    let { username, password } = this.props;
    let payload = { username, password };

    this.props.dispatch({
      type: 'login/login',
      payload
    })
  }

  componentWillMount() {

    this.props.dispatch({
      type: 'login/getlogin'
    })

  }

  render() {
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
                <Input type="text" value={this.props.username} onChange={this.handleInput.bind(this, 'username')} />
              </div>
            </div>
            <div className={styles.item}>
              <div>
                密码：
                </div>
              <div>
                <Input type="password" value={this.props.password} onChange={this.handleInput.bind(this, 'password')} />
              </div>
            </div>
            <div className={styles.bottom}><Button onClick={this.handleSubmit.bind(this)} type="primary">提交</Button></div>
          </div>
        </Content>
      </Layout>
    );
  }


}