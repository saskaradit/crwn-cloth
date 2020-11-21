import UserActionType  from './user.types';

export const googleSignInStart =() =>({
  type: UserActionType.GOOGLE_SIGN_IN_START
})

export const signInSuccess = user => ({
  type: UserActionType.SIGN_IN_SUCCESS,
  payload: user
})
export const signInFail = error => ({
  type: UserActionType.SIGN_IN_FAIL,
  payload: error
})

export const emailSignInStart = emailAndPassword =>({
  type: UserActionType.EMAIL_SIGN_IN_START,
  payload: emailAndPassword
})

export const checkUserSession = () => ({
  type: UserActionType.CHECK_USER_SESSION
})

export const signOutStart = () => ({
  type: UserActionType.SIGN_OUT_START
})

export const signOutSuccess = () => ({
  type: UserActionType.SIGN_OUT_SUCCESS
})

export const signOutFail = error => ({
  type: UserActionType.SIGN_OUT_FAIL,
  payload: error
})

export const signUpStart = (userCredential) => ({
  type: UserActionType.SIGN_UP_START,
  payload: userCredential
})

export const signUpSuccess = ({user,addtionalData}) =>({
  type: UserActionType.SIGN_UP_SUCCESS,
  payload: {user,addtionalData }
})

export const signUpFail = error => ({
  type: UserActionType.SIGN_UP_FAIL,
  payload: error
})