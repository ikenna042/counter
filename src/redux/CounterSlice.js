import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0
    },
    reducers: {
        increament: (state) => ({...state, count: state.count + 1}),
        decreament: (state) => ({...state, count: state.count - 1}),
        test: (state, action) => {
            const { value } = action.payload
            console.log(value)
        }
    }
})

export const { increament, decreament, test } = counterSlice.actions

export default counterSlice.reducer