import { configStore, createSkice } from "@reduxjs/toolkit";

const initCounterState = createSlice({
    count: 0,
    users: [
        {name: "Abc"}
    ]
});

// action
// - increment
// -decrement

{
    type: 'INCREMENT',
}
