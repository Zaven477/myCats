import { fetchCats } from "../../api/cats";
import { call, put, takeEvery } from "redux-saga/effects";
import type { CountPayload } from "./types";
import { getImagesCats, getNextImagesCats } from "../actions";
import { setCats, setError, setLoading } from "../reducer/catsSlice";
import { asyncFlow } from "../../../../reduxSaga/asyncFlow";

function* getCats({
  payload,
}: CountPayload) {
  yield asyncFlow(setLoading, setError, function* flow() {
    const cats = yield call(fetchCats, payload);
    yield put(setCats(cats));
  });
}

export function* catsSaga() {
  yield takeEvery([getImagesCats, getNextImagesCats], getCats);
}
