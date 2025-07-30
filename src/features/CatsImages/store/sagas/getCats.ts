import { fetchCats } from "../../api/cats";
import { call, put, takeEvery, type Effect } from "redux-saga/effects";
import type { CountPayload } from "./types";
import { getImagesCats, getNextImagesCats } from "../actions";
import type { CurrentCats } from "../../components/Cats/types";
import { setCats, setError, setLoading } from "../reducer/catsSlice";

function* getCats({
  payload,
}: CountPayload): Generator<Effect, void, CurrentCats[]> {
  yield put(setLoading(true));

  try {
    const cats = yield call(fetchCats, payload);
    yield put(setCats(cats));
  } catch (err) {
    if (err instanceof Error) {
      yield put(setError(err.message));
    }
  } finally {
    yield put(setLoading(false));
  }
}

export function* mySaga() {
  yield takeEvery([getImagesCats, getNextImagesCats], getCats);
}
