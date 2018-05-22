import React from 'react';
import { connect } from 'dva';
import styles from './Info.css';
import Info from '../components/Info/Info';

function mapStateToProps({ Home: { currentUser } }) {

  return { currentUser };
}

export default connect(mapStateToProps)(Info);
