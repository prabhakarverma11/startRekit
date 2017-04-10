import { expect } from 'chai';

import {
  LOGIN_TEST_ACTION,
} from 'features/login/redux/constants';

import {
  loginTestAction,
  reducer,
} from 'features/login/redux/loginTestAction';

describe('login/redux/loginTestAction', () => {
  it('action: loginTestAction', () => {
    const expectedAction = {
      type: LOGIN_TEST_ACTION,
    };
    expect(loginTestAction()).to.deep.equal(expectedAction);
  });

  it('reducer should handle LOGIN_TEST_ACTION', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: LOGIN_TEST_ACTION }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
