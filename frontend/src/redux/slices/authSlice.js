import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//! Inbuild Thunk :
export const signup = createAsyncThunk("auth/signup", async (data, { rejectWithValue }) => {
    try {
        const response = await axios.post("http://localhost:5000/auth/signup", data);
        return response.data.data;
    } catch (error) {
        rejectWithValue(error);
        // return rejectWithValue(error.response.data);
    }
});
export const login = createAsyncThunk("auth/login", async (data, { rejectWithValue }) => {
    try {
        const response = await axios.post("http://localhost:5000/auth/login", data);
        return response.data.data;
    } catch (error) {
        rejectWithValue(error);
        // return rejectWithValue(error.response.data);
    }
});

const initialState = {
    isLoading: false,
    user: null,
    error: null,
    isAuth: false,
    role: null
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        // setLoading: (state) => {
        //     state.isLoading = true
        // },
        // setSuccess: (state, action) => {
        //     state.isLoading = false;
        //     state.user = action.payload;
        // },
        // setError: (state, action) => {
        //     state.isLoading = false;
        //     state.error = action.payload;
        // }
    },
    //! Only use for async functions
    extraReducers: (builder) => {
        builder
            .addCase(signup.pending, (state) => {
                state.isLoading = true;
                state.user = null;
            })
            .addCase(signup.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
            })
            .addCase(signup.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(login.pending, (state) => {
                state.isLoading = true;
                state.user = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
                state.isAuth = true;
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
});

export const { setLoading, setSuccess, setError } = authSlice.actions;

//! Custom Thunk :
// export const signup = (data) => {
//     return async (dispatch) => {
//         dispatch(setLoading());
//         try {
//             const response = await axios.post("http://localhost:5000/auth/signup", data);
//             dispatch(setSuccess(response.data.data));
//         } catch (error) {
//             dispatch(setError(error.response.data));
//         }
//     }
// }

export default authSlice.reducer;