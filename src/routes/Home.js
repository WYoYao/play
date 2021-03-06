import React from 'react';
import { connect } from 'dva';
import styles from './Home.css';
import HomeComponent from '../components/Home/Home';


function mapStateToProps({ Home }, { history }) {

  return { ...Home };
}

export default connect(mapStateToProps)(HomeComponent);
