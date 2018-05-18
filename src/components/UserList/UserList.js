import React, { Component } from 'react';
import styles from './UserList.css';
import { List, Avatar } from 'antd';


export default class UserList extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    const data = [
      {
        title: 'Ant Design Title 1',
      },
      {
        title: 'Ant Design Title 2',
      },
      {
        title: 'Ant Design Title 3',
      },
      {
        title: 'Ant Design Title 4',
      },
    ];

    return (
      <List
        size="middle"
        itemLayout="horizontal"
        dataSource={this.props.contacts}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar size="small" src={`http://192.168.100.30:3000${item.HeadImgUrl}`} />}
              title={<a dangerouslySetInnerHTML={{ __html: item.RemarkName || item.OrignalNickName || item.NickName }}></a>}
            />
          </List.Item>
        )}
      />
    );
  }
}
