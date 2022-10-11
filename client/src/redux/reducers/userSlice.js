import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { useSelector } from "react-redux";
import {filterReducer} from "../reducers/filterSlice"

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
   const response = await axios.get(`https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=all`)
            .then((res) => {return res.data.items})
    return response
}
   
       
    
)

const initialState = {
    users: [],
    isLoading: false,
    error: '',
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

    },
    extraReducers: {
        [fetchUsers.pending]: (state, action) => {
            state.isLoading = true
        },
        [fetchUsers.fulfilled]: (state, action) => {
            state.isLoading = false
            state.error = ''
            state.users = action.payload
        },
        [fetchUsers.rejected]: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        }
    }

})

export default userSlice.reducer

