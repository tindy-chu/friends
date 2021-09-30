import { all, fork } from "redux-saga/effects";
import friendsSaga from "./friends/friends.saga";

export default function* rootSaga() {
  yield all([fork(friendsSaga)]);
}
