import { Map } from 'immutable';

const defaultState = Map({
  userName: '',
  password: '',
  emailAddress: '',
  authenticated: false,
});

const userReducer = (state = defaultState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default userReducer;
