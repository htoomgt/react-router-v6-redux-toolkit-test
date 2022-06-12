import { createSlice } from "@reduxjs/toolkit";

const navActiveSlice = createSlice({
    name : 'navActive',
    initialState : { activePage : 'home' },
    reducers : {
        setActivePage : (state, action) => {
            let newActivePage = action.payload;
            state.activePage = newActivePage;
        }
    }
});

export default navActiveSlice;