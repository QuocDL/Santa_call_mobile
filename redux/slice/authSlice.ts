import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type IUser = {
    email: string;
    user_name: string;
    id_user: string;
    ip_register: string;
    link_avatar: string;
    device_register: string;
};

type AuthState = {
    user: IUser | null;
    authenticate: boolean;
    modal: boolean;
};

const initialState: AuthState = {
    user: null,
    authenticate: false,
    modal: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<IUser | null>) => {
            state.user = action.payload;
            state.authenticate = true;
        },
        logout: (state) => {
            state.user = null;
            state.authenticate = false;
        },
        setModalOpen: (state) => {
            state.modal = true;
        },
        setModalClose: (state) => {
            state.modal = false;
        },
    },
});

const authReducer = authSlice.reducer;
export const { login, logout, setModalClose, setModalOpen } = authSlice.actions;
export default authReducer;
