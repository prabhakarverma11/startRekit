import initialState from './initialState';
import { reducer as login } from './loginAction';
import { reducer as logout } from './logoutAction';
// import { reducer as signupAction } from './signupAction';

const reducers = [
  login,
  logout,
  // signupAction,
];

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    // Handle cross-topic actions here
    default:
      newState = state;
      break;
  }
  return reducers.reduce((s, r) => r(s, action), newState);
}
