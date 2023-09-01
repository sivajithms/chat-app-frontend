import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data : [
    {
      id: 'user1',
      profilePic: "https://picsum.photos/200/300?random=1",
      userName: "Sivajith M S",
      date: "23/33/3333",
      lastMessage: "Hey there!",
    },
    {
      id: 'user2',
      profilePic: "https://picsum.photos/200/300?random=2",
      userName: "Alex",
      date: "23/33/3333",
      lastMessage: "How's it going?",
    },
    {
      id: 'user3',
      profilePic: "https://picsum.photos/200/300?random=3",
      userName: "Maria",
      date: "23/33/3333",
      lastMessage: "See you later!",
    },
    {
      id: 'user4',
      profilePic: "https://picsum.photos/200/300?random=4",
      userName: "John",
      date: "23/33/3333",
      lastMessage: "Got any plans for the weekend?",
    },
    {
      id: 'user5',
      profilePic: "https://picsum.photos/200/300?random=5",
      userName: "Emily",
      date: "23/33/3333",
      lastMessage: "Sounds good!",
    },
    {
      id: 'user6',
      profilePic: "https://picsum.photos/200/300?random=6",
      userName: "Michael",
      date: "23/33/3333",
      lastMessage: "I'll catch you later.",
    },
    {
      id: 'user7',
      profilePic: "https://picsum.photos/200/300?random=7",
      userName: "Sophia",
      date: "23/33/3333",
      lastMessage: "Sure thing!",
    },
    {
      id: 'user8',
      profilePic: "https://picsum.photos/200/300?random=8",
      userName: "David",
      date: "23/33/3333",
      lastMessage: "Not much happening here.",
    },
    {
      id: 'user9',
      profilePic: "https://picsum.photos/200/300?random=9",
      userName: "Olivia",
      date: "23/33/3333",
      lastMessage: "See you soon!",
    },
    {
      id: 'user10',
      profilePic: "https://picsum.photos/200/300?random=10",
      userName: "Liam",
      date: "23/33/3333",
      lastMessage: "Sounds like a plan!",
    },
  ]
}

export const allUsersSlice = createSlice({
    name:'allUsers',
    initialState,
    reducers:{
        addUser:(state,action)=>{
            state.data = [...state.data,action.payload]
        },
        setAllUsers:(state,action)=>{
            state.data = action.payload
        }
    }
})

export const {addUser, setAllUsers} = allUsersSlice.actions

export default allUsersSlice.reducer