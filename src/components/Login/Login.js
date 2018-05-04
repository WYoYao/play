import React from 'react';
import styles from './Login.less';
import { Layout,Input } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

function Login() {

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
                  <Input/>
                </div>
              </div>
              <div className={styles.item}>
                <div>
                  账户：
                </div>
                <div>
                  <Input/>
                </div>
              </div>
              <div className={styles.bottom}>提交</div>
          </div>
      </Content>
    </Layout>
  );
}

export default Login;
