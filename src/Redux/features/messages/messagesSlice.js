import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data:[ ]
}

export const messagesSlice = createSlice({
    name:'messages',
    initialState,
    reducers:{
        setMessages:(state,action)=>{
            state.data = action.payload
        }
    }
})

export const {setMessages} = messagesSlice.actions

export default messagesSlice.reducer