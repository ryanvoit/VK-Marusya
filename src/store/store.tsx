import authFormStateReducer from './authFormStateSlice'
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        authFormState: authFormStateReducer
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>