import React, { Component } from 'react';
import styles from './Scan.less';
import { Layout } from 'antd';
const { Content } = Layout;


export default class Scan extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
  }
  render() {

    return (
      <Layout className={styles.normal}>
        <div className={styles.content}>
          <div className={styles.pic}>
            <img className={styles.img} src={this.props.url} />
          </div>
          <div className={styles.footer}>
            扫码进行登录
        </div>
        </div>
      </Layout>
    );
  }
};
