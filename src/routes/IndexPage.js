import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd';

function IndexPage() {
  return (
    <Button>Start</Button>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
