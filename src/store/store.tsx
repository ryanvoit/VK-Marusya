import authFormStateReducer from './authFormStateSlice'
import accountStateReducer from './accountStateSlice'
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        authFormState: authFormStateReducer,
        accountState: accountStateReducer
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>