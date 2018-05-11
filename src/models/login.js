
import * as loginService from '../services/login.js';
import { routerRedux } from 'dva/router';

export default {
  namespace: 'login',
  state: {
    username: "",
    password: "",
    url: "",
  },
  reducers: {
    handlerInput(state, { username, password }) {

      return { ...state, username, password };
    },
    success(state, { payload }) {
      console.log(payload);
      return state;
    },
    loginUrl(state, { url }) {
      return { ...state, url };
    }
  },
  effects: {
    *login({ payload }, {
      put, call, select
    }) {

      const { data } = yield call(loginService.login, payload);
      // const { locationQuery } = yield select(_ => _.app);
      yield put({ type: 'success', payload: data });

      if (data.state.code) {
        yield put(routerRedux.push('/Home'))
      }
    },
    *getlogin({ }, {
      put, call, select
    }) {

      const { data } = yield call(loginService.getlogin);
      yield put({ type: 'loginUrl', payload: data })
    }
  },
  subscriptions: {},
};
