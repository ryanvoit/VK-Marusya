import { createSlice } from "@reduxjs/toolkit"

const accountStateSlice = createSlice({
    name: 'accountState',
    initialState: 'favourites' as 'favourites' | 'account',
    reducers: {
        toggleAccountState: (state, action: { payload: 'favourites' | 'account' }) => action.payload
    }
})

export const { toggleAccountState } = accountStateSlice.actions

export default accountStateSlice.reducer