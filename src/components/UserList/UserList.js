import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import styles from './UserList.css';
import { List, Avatar } from 'antd';
import { routerRedux } from 'dva/router';

export default class UserList extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  }
  constructor(props, context) {
    super(props, context);
    let { dispatch } = props;

    this.setUser = item => {
      dispatch({
        type: "Home/setCurrentUser",
        payload: item
      });
      this.context.router.push('/info');
    }
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
            <List.Item.Meta onClick={this.setUser.bind(null, item)}
              avatar={<Avatar size="small" src={`http://192.168.100.30:3000${item.HeadImgUrl}`} />}
              title={<a dangerouslySetInnerHTML={{ __html: item.RemarkName || item.OrignalNickName || item.NickName }}></a>}
            />
          </List.Item>
        )}
      />
    );
  }
}