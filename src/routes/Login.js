import React from 'react';
import { connect } from 'dva';
import styles from './Login.css';
import LoginComponent from '../components/Login/Login'

function mapStateToProps(){

  console.log(arguments);

  return {};
}

export default connect(mapStateToProps)(LoginComponent);
