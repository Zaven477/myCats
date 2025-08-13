import type { Effect } from "redux-saga/effects";
import type { CurrentCats } from "../../components/Cats/types";

export type CountPayload = {
  payload: number;
};

export type Funcfn = () => Generator<Effect, void, CurrentCats[]>
export type TLoading = (arg: boolean) => {type: string, payload: boolean};
export type TError = (arg: string) => {type: string, payload: string};