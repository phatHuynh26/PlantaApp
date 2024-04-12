import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosInstance from "../helpers/Axiosinstance";

export const login = createAsyncThunk(
    "user/login",
    async (data, { rejectWithValue }) => {
        try {
            const response = await AxiosInstance().post('users/login',data)
            console.log( response);
            if (response.status==true){
                return response.data
            }else{
                return rejectWithValue(error)
            }
        } catch (error) {
            console.log("...lỗi", error);
            return  rejectWithValue(error)
        }

    })