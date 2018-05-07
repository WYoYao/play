import React from 'react';
import { connect } from 'dva';
import styles from './Login.css';
import LoginComponent from '../components/Login/Login'

function mapStateToProps({ login }) {
  console.log(arguments);
  return login;
}

export default connect(mapStateToProps)(LoginComponent);
