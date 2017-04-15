import {
  LEADS_TEST_ACTION,
} from './constants';

export function leadsTestAction() {
  return {
    type: LEADS_TEST_ACTION,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case LEADS_TEST_ACTION:
      return {
        ...state,
      };

    default:
      return state;
  }
}
