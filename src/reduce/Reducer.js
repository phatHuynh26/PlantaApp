import { createSlice } from "@reduxjs/toolkit";
import { login } from "./UserAPI";
const initialState = {
    user: null,
    cart: [],
    products: [],
};

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
        },
        logout: (state, action) => {
            state.user = null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.user = action.payload
        })
        builder.addCase(login.pending, (state, action) => {
        })
        builder.addCase(login.rejected, (state, action) => {
        })
    }

});

export const { addItemToCart,logout } = appSlice.actions;
export default appSlice.reducer