import { configureStore } from "@reduxjs/toolkit";
import { catsReducer } from "./catsSlice";
import { favoritesCatsReducer } from "./favoriteSlice";
import createSagaMiddleware from "redux-saga";
import { listSaga } from "../sagas/listSaga";
import { commentsReducer } from "./commentsSlice";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    cats: catsReducer,
    favoritesCats: favoritesCatsReducer,
    comments: commentsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

listSaga.map((saga) => sagaMiddleware.run(saga));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
