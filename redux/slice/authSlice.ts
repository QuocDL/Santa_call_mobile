import { createSlice } from "@reduxjs/toolkit"

type initialState = {
    user: null | any
    authenticate: boolean
    modal: boolean
}

const initialState = {
    user: null,
    authenticate: false,
    modal: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload
            state.authenticate = true
        },
        logout: (state) => {
            state.user = null
            state.authenticate = false
        },
        setModalOpen: (state) => {
            state.modal = true
        }, 
        setModalClose: (state) => {
            state.modal = false
        }
    }
})

const authReducer = authSlice.reducer
export const { login, logout, setModalClose, setModalOpen } = authSlice.actions;
export default authReducer