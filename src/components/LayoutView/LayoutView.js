import React from 'react';
import styles from './LayoutView.less';
import { Layout } from "antd";

function LayoutView(obj) {

  return (
    <Layout className={styles.normal}>
      {obj.children}
    </Layout>
  );
}

export default LayoutView;
