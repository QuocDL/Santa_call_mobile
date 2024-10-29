import { createSlice } from "@reduxjs/toolkit"

type initialState = {
    user: null | any
    authenticate: boolean
}

const initialState = { 
    user: null,
    authenticate: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action)=>{
            state.user = action.payload
            state.authenticate = true
        },
        logout: (state)=>{
            state.user =null
            state.authenticate = false
        }
    }
})

const authReducer = authSlice.reducer
export const {login, logout} = authSlice.actions;
export default authReducer