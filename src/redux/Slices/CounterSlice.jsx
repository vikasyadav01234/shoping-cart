import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:0,
}

const CounterSlice = createSlice({
    name:"counter",
    initialState,
})