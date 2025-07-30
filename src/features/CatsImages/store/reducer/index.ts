import { configureStore } from '@reduxjs/toolkit'
import { catsReducer } from './catsSlice'
import { favoritesCatsReducer } from './favoriteSlice'
import createSagaMiddleware from 'redux-saga'
import { mySaga } from '../sagas/getCats'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    cats: catsReducer,
    favoritesCats: favoritesCatsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(mySaga)


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch