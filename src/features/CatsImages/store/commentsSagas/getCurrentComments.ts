import { call, put, takeEvery } from "redux-saga/effects";
import { getCurrentComments } from "../actions";
import type { CountPayload } from "../sagas/types";
import { asyncFlow } from "../../../../reduxSaga/asyncFlow";
import { setComments, setErrorComments, setLoadingComments } from "../reducer/commentsSlice";
import { fetchComments } from "../../api/comments";

function* currentComments({
  payload,
}: CountPayload) {
  yield asyncFlow(setLoadingComments, setErrorComments, function* flow() {
    const comments = yield call(fetchComments, payload);
    yield put(setComments(comments));
  });
}

export function* commentsSaga() {
  yield takeEvery(getCurrentComments, currentComments);
}
