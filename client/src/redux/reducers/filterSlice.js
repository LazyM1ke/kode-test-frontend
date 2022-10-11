import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    searchValue: "",
    activeGroupName: "all",
}

export const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setSearchValue(state, action) {
            state.searchValue = action.payload
        },
        setActiveGroupName(state, action) {
            state.activeGroupName = action.payload
        }

    }
})

export default filterSlice.reducer