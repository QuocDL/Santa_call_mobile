import { createSlice } from "@reduxjs/toolkit";


type IWelcomeScreen = {
    payOption: boolean
};

const initialState: IWelcomeScreen = {
    payOption: false,
};

const welcomeScreenSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setPayOption: (state)=>{
            state.payOption = !state.payOption
        }
    },
});

const welcomeReducer = welcomeScreenSlice.reducer;
export const { setPayOption } = welcomeScreenSlice.actions;
export default welcomeReducer;
