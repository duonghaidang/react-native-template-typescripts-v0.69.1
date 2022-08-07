import {
  AuthDispatchTypes,
  AuthType,
  CLEAR_DATA,
  TEST,
} from '~actions/auth/authTypes';

interface InitialState {
  data?: AuthType;
}

const initialState: InitialState = {};

const authReducer = (
  state: InitialState = initialState,
  action: AuthDispatchTypes,
) => {
  switch (action.type) {
    case CLEAR_DATA:
      return initialState;
    case TEST:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
