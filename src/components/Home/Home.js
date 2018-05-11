import React from 'react';
import { Layout, Avatar } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import styles from './Home.less';

function Home({ children }) {
  return (
    <Layout>
      <Header className={styles.header}>
        <div className={styles.icon}></div>
        <div className={styles.avatar}>
          <Avatar src="https://avatars1.githubusercontent.com/u/18732290?s=40&v=4" />
        </div>
      </Header>
      <Layout>
        <Sider className={styles.sider}>Sider</Sider>
        <Content>
          {children}
        </Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default Home;
