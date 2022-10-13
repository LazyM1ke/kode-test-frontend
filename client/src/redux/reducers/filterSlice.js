import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    searchValue: "",
    modalActive: false,
    sortType: "alphabet",
    activeGroupName: "Все",
    activeGroupValue: "all",
    groups: [
        {
            name: 'Все',
            value: 'all'
        },
        {
            name: 'Android',
            value: 'android'
        },
        {
            name: 'IOS',
            value: 'ios'
        },
        {
            name: 'Дизайн',
            value: 'design'
        },
        {
            name: 'Менеджмент',
            value: 'management'
        },
        {
            name: 'QA',
            value: 'qa'
        },
        {
            name: 'Бэк-офис',
            value: 'back_office'
        },
        {
            name: 'Frontend',
            value: 'frontend'
        },
        {
            name: 'HR',
            value: 'hr'
        },
        {
            name: 'PR',
            value: 'pr'
        },
        {
            name: 'Backend',
            value: 'backend'
        },
        {
            name: 'Техподдержка',
            value: 'support'
        },
        {
            name: 'Аналитика',
            value: 'analytics'
        },
    ]
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
        },
        setActiveGroupValue(state, action) {
            state.activeGroupValue = action.payload
        },
        setModalActive(state, action) {
            state.modalActive = action.payload
        },
        setSortType(state, action) {
            state.sortType = action.payload
            state.modalActive = false
        },

    }
})

export default filterSlice.reducer