import React from 'react';
import { connect } from 'dva';
import styles from './Login.css';
import LoginComponent from '../components/Login/Login'

function mapStateToProps({ login }) {

  return login;
}

export default connect(mapStateToProps)(LoginComponent);
