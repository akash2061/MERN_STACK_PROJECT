import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

// Async thunk for signing up
export const signup = createAsyncThunk(
    'auth/signup',
    async (data, { rejectWithValue }) => {
        try {
            const response = await axios.post("http://localhost:5000/auth/signup", data);
            // alert("User Signup Successful");
            // console.log("User Signup Successful", response.data.data);
            return response.data.data; // Return user data from response
        } catch (error) {
            // Extract the important information from the Axios error
            const errorMessage = error.response?.data?.message || 'Signup failed. Please try again.';
            const errorStatus = error.response?.status || 500;

            // Return a serialized error object
            return rejectWithValue({ message: errorMessage, status: errorStatus });
        }
    }
);

// Async thunk for logging in
export const login = createAsyncThunk(
    'auth/login',
    async (data, { rejectWithValue }) => {
        try {
            const response = await axios.post("http://localhost:5000/auth/login", data);
            localStorage.setItem("token", response.data.token); // Save the token to local storage
            return response.data.data; // Return user data from response
        } catch (error) {
            // Extract the important information from the Axios error
            const errorMessage = error.response?.data?.message || 'Login failed. Please try again.';
            return rejectWithValue({ message: errorMessage });
        }
    }
);

const getRole = () => {
    const token = localStorage.getItem("token");
    if (token) {
        const decodedToken = jwtDecode(token);
        return decodedToken.role;
    }
    return null;
};

const getUser = () => {
    const token = localStorage.getItem("token");
    if (token) {
        const decodedToken = jwtDecode(token);
        return decodedToken; // Assuming you want the full decoded token
    }
    return null;
};

const initialState = {
    isLoading: false,
    error: null,
    user: getUser(),
    isAuth: !!localStorage.getItem("token"), // true if token exists
    role: getRole(),
    token: localStorage.getItem("token"),
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.isAuth = false;
            state.role = null;
            state.token = null;
            state.user = null; // Reset user to null on logout
            localStorage.removeItem("token"); // Clear token from local storage
        },
        loginWithGoogle: (state, action) => {
            const { token, role, user } = action.payload;
            localStorage.setItem("token", token);
            state.isAuth = true;
            state.role = role;
            state.user = user;
        }
    },
    extraReducers: (builder) => {
        builder
            // Signup cases
            .addCase(signup.pending, (state) => {
                state.isLoading = true;
                state.error = null; // Clear previous error
            })
            .addCase(signup.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload; // Assuming payload is user data
                state.error = null;
            })
            .addCase(signup.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload; // Set error from signup failure
            })
            // Login cases
            .addCase(login.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload; // Assuming payload is user data
                state.role = action.payload.role; // Set user role
                state.isAuth = true; // User is authenticated
                state.error = null;
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload; // Set error from login failure
            });
    },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
