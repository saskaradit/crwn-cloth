import UserActionType from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionType.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error:null
      };
    case UserActionType.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error:null
      }
    case UserActionType.SIGN_IN_FAIL:
    case UserActionType.SIGN_OUT_FAIL:
    case UserActionType.SIGN_UP_FAIL:
      return {
        error: action.payload,
        ...state
      }
    default:
      return state;
  }
};

export default userReducer;