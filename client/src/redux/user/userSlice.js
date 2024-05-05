import {createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentUser: null,
    error: null,
    loading: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        signInStart: (state) => {
            state.loading = true;
        },
        signInSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        signInFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        // Reducer for user update
        updateUserStarts: (state) => {
            state.loading = true;
        },
        updateUserSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        updateUserFailure: (state) => {
            state.loading = true;
        },

        // Reducer for delete user
        deleteUserStarts: (state) => {
            state.loading = true;
        },
        deleteUserSuccess: (state, action) => {
            state.currentUser = null;
            state.loading = false;
            state.error = null;
        },
        deleteUserFailure: (state) => {
            state.error = action.payload;
            state.loading = false;
        }
    }
});

export const { 
    signInStart, 
    signInSuccess, 
    signInFailure,
    updateUserStarts,
    updateUserSuccess,
    updateUserFailure,
    deleteUserStarts,
    deleteUserSuccess,
    deleteUserFailure
} = userSlice.actions;

export default userSlice.reducer;