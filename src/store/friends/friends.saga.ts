import { all, fork, takeLatest, call, put } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import { EActionType } from "../friends/friends.action";
import http from "../../util/http.util";
import friendsAction from "./friends.action";

function* onGet() {
  const resp: AxiosResponse = yield call(
    http.get,
    "https://api.json-generator.com/templates/Xp8zvwDP14dJ/data"
  );
  yield put(friendsAction.set(resp.data));
}

function* watchGet() {
  yield takeLatest(EActionType.GET, onGet);
}

export default function* friendsSaga() {
  yield all([fork(watchGet)]);
}
