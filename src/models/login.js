
import * as loginService from '../services/login.js';

export default {
  namespace: 'login',
  state: {
    username: "",
    password: "",
  },
  reducers: {
    handlerInput(state, { username, password }) {

      return { ...state, username, password };
    }
  },
  effects: {
    *login(aaa, {
      put, call, select
    }) {
      debugger;

      const data = yield call(loginService.login, payload);

      if (data.success) {
        console.log('logun success');
      }
    }
  },
  subscriptions: {},
};
