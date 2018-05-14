import React from 'react';
import { connect } from 'dva';
import Scan from '../components/Scan/Scan'

function mapStateToProps({ Scan }) {
  return Scan;
}

export default connect(mapStateToProps)(Scan);
