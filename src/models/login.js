
export default {
  namespace: 'login',
  state: {
    username: "",
    password: "",
  },
  reducers: {
    submit(state, { payload: { username, password } }) {
      return { ...state, username, password };
    }
  },
  effects: {},
  subscriptions: {},
};
