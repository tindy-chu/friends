import { all, fork, put, takeLatest, delay } from "redux-saga/effects";
// import counterAction from "../counter/counter.action";
import userAction, { EActionType, TApiSignIn } from "../user/user.action";

function* onSignIn(action: TApiSignIn) {
  yield delay(1500);
  const token = Math.random() + "-token";
  yield put(userAction.setInfo({ ...action.payload, token }));
  // yield put(counterAction.setHundred());
}

function* watchSignIn() {
  yield takeLatest(EActionType.API_SIGN_IN, onSignIn);
}

export default function* userSaga() {
  yield all([fork(watchSignIn)]);
}
