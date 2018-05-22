import * as service from '../services/websocket.js';

export default {
  namespace: 'Home',
  state: {
    botData: {},
    contacts: [],
    avatar: '',
    currentUser: {},
  },
  reducers: {
    // 保存登录信息
    setBotData(state, { payload: botData }) {
      window.localStorage.setItem('botData', JSON.stringify(botData));
      return { ...state, botData };
    },
    // 设置用户联系人
    setContacts(state, { payload: contacts }) {
      return { ...state, contacts }
    },
    // 添加用户头像
    setAvatar(state, { payload: { url: avatar } }) {
      window.localStorage.setItem('avatar', avatar);
      return { ...state, avatar };
    },
    // 设置当前选中的用户信息
    setCurrentUser(state, { payload: currentUser }) {
      return { ...state, currentUser };
    }
  },
  effects: {},
  subscriptions: {
    login({ dispatch, history }) {
      return service.listen('login', ({ payload }) => {
        dispatch({ type: 'setBotData', payload });
        history.push('/');
      })
    },
    contacts({ dispatch }) {
      return service.listen('contacts', ({ payload }) => {
        dispatch({ type: 'setContacts', payload });
      })
    },
    avatar({ dispatch }) {
      return service.listen('avatar', ({ payload }) => {
        dispatch({ type: 'setAvatar', payload })
      })
    }
  },
};
