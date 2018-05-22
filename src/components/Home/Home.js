import React from 'react';
import { Layout, Avatar } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import styles from './Home.less';
import UserList from '../UserList/UserList'

function Home({ children, dispatch, contacts, avatar, currentUser }) {

  return (
    <Layout>
      <Header className={styles.header}>
        <div className={styles.icon}></div>
        <div className={styles.avatar}>
          <Avatar src={avatar} />
        </div>
      </Header>
      <Layout>
        <Sider className={styles.sider}>
          <UserList {...{ dispatch, contacts }} />
        </Sider>
        <Content>
          {children}
        </Content>
      </Layout>
      <Footer>底部内容暂无</Footer>
    </Layout>
  );
}

export default Home;
