import initialState from './initialState';
import { reducer as loginAction } from './loginAction';
import { reducer as logoutAction } from './logoutAction';
// import { reducer as signupAction } from './signupAction';

const reducers = [
  loginAction,
  logoutAction,
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
