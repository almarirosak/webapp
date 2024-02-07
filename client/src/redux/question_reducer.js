import { createSlice } from "@reduxjs/toolkit"

export const questionReducer = createSlice({
    name:'questions',
    initialState : {
        queue: [],
        answers: [],
        trace: 0
    }
})