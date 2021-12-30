import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit'
import counterSlice from './CounterSlice'

const reducer = combineReducers({
    counter: counterSlice,
})

const store = configureStore({
    reducer,
    middleware: [...getDefaultMiddleware({ thunk: false })]
})

export default store