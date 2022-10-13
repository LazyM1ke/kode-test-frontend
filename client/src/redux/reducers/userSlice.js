import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchUsers = createAsyncThunk('users/fetchUsers', async (groupValue, thunkAPI) => {
   const response = await axios.get(`https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=${groupValue}`)
            .then((res) => {return res.data.items})
    return response
}
   
       
    
)

const initialState = {
    users: [],
    status: 'loading',
    details: {
    },
    error: '',
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setDetails(state, action) {
            state.details = action.payload
            localStorage.setItem('userId', action.payload.id);
        }
        
    },
    extraReducers: {
        
        [fetchUsers.pending]: (state, action) => {
            state.users = []
            state.status = 'loading'
        },
        [fetchUsers.fulfilled]: (state, action) => {
            state.status = 'success'
            state.error = ''
            state.users = action.payload
        },
        [fetchUsers.rejected]: (state, action) => {
            state.status = 'error'
            state.error = action.payload
        }
    }

})

export default userSlice.reducer

