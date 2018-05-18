import React from 'react';
import styles from './Info.less';
import { List } from 'antd';

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];


function Info({ currentUser }) {

  console.log(arguments);

  return (
    <div className={styles.normal}>
      <h3 style={{ margin: '16px 0' }}>个人信息</h3>
      <List
        size="large"
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={data}
        renderItem={item => (<List.Item>{item}</List.Item>)}
      />
    </div>
  );
}

export default Info;
