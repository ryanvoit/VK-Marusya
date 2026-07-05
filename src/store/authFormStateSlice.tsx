import { createSlice } from "@reduxjs/toolkit"

const authFormStateSlice = createSlice({
    name: 'authFormState',
    initialState: 'login' as 'login' | 'register' | 'success',
    reducers: {
        toggleAuthFormState: (state, action: { payload: 'login' | 'register' | 'success' }) => action.payload
    }
})

export const { toggleAuthFormState } = authFormStateSlice.actions

export default authFormStateSlice.reducer