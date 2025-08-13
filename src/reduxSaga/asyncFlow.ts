import { put } from "redux-saga/effects";
import type { Funcfn, TError, TLoading } from "../features/CatsImages/store/sagas/types";

export function* asyncFlow(
  actionLoading: TLoading,
  actionError: TError,
  fn: Funcfn
) {
  yield put(actionLoading(true));

  try {
    yield* fn();
  } catch (err) {
    if (err instanceof Error) {
      yield put(actionError(err.message));
    }
  } finally {
    yield put(actionLoading(false));
  }
}
