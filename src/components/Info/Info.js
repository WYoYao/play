import React from 'react';
import styles from './Info.less';
import { List } from 'antd';

function Info({ currentUser }) {

  return (
    <div className={styles.normal}>
      <h3 style={{ margin: '16px 0' }}>个人信息</h3>
      <List
        size="large"
        header={<div>{currentUser.NickName || currentUser.OrignalNickName}</div>}
        footer={<div></div>}
        bordered
        dataSource={[
          `昵称：${currentUser.NickName || currentUser.OrignalNickName}`,
          `签名：${currentUser.Signature || '不详'}`,
          `省份：${currentUser.Province || '不详'}`,
          `城市：${currentUser.City || '不详'}`,
          `性别：${currentUser.Sex == 1 ? '男' : currentUser.Sex == 2 ? '女' : '不详'}`,
        ]}
        renderItem={item => (<List.Item>{item}</List.Item>)}
      />
    </div>
  );
}

export default Info;
