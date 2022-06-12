import { createSlice } from "@reduxjs/toolkit"


const counterSlice = createSlice({
    name : 'counter',
    initialState : {count: 3},
    reducers : {
        increment: (state, action) => {
            state.count++;
        },
        decrement: (state, action) => {
            state.count--;
        }
    }
});


export default counterSlice