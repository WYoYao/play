import * as service from '../services/websocket.js';

export default {
  namespace: 'Home',
  state: {
    botData: {}
  },
  reducers: {
    setBotData(state, { payload: botData }) {
      window.localStorage.setItem('botData', JSON.stringify(botData));
      return { ...state, botData };
    }
  },
  effects: {},
  subscriptions: {
    login({ dispatch, history }) {
      return service.listen('login', ({ payload }) => {
        dispatch({ type: 'setBotData', payload });
        history.push('/');
      })
    }
  },
};
