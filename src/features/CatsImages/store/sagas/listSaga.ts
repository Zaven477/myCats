import { commentsSaga } from "../commentsSagas/getCurrentComments";
import { catsSaga } from "./getCats";

export const listSaga = [catsSaga, commentsSaga]