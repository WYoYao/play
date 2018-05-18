import React from 'react';
import { Layout, Avatar } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import styles from './Home.less';
import UserList from '../UserList/UserList'

function Home({ children, dispatch, contacts, avatar, currentUser }) {

  console.log(children);

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
          <UserList contacts={contacts} />
        </Sider>
        <Content>
          {



            React.Children.map(children, (child) => {
              return (
                <child
                  currentUser={currentUser}
                />
              )
            })
          }
        </Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default Home;
