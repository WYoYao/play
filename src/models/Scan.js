import * as service from '../services/websocket.js';
import { routerRedux } from 'dva/router';


export default {
  namespace: 'Scan',
  state: {
    loginUrl: ""
  },
  reducers: {
    setImageUrl(state, { payload: { url } }) {
      return { ...state, url };
    }
  },
  effects: {
    // *getLoginUrl({ payload }, { call, put }) {
    //   const { data } = yield call(service.getLoginUrl, payload);
    //   console.log(data);
    //   if (data.state == 200) {
    //     let { url } = data.content;
    //     yield put({
    //       type: "setImageUrl",
    //       payload: { url }
    //     })
    //   }
    // }
  },
  subscriptions: {
    socketMessage({ dispatch, history }) {
      return service.listen('qrcode', ({ payload }) => {
        dispatch({ type: 'setImageUrl', payload });
        history.push('/Scan');
      });
    }
  },
};
