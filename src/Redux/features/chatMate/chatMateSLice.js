import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data:{ }
}

export const chatMateSlice = createSlice({
    name:'chatMate',
    initialState,
    reducers:{
        setChatMate:(state,action)=>{
            state.data = action.payload
            
        }
    }
})

export const {setChatMate} = chatMateSlice.actions

export default chatMateSlice.reducer