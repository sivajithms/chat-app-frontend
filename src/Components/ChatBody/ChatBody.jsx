import React, { useState } from 'react'
import './ChatBody.css'
import ChatList from '../ChatList/ChatList'
import ChatContent from '../ChatContent/ChatContent'
import UserDetails from '../UserDetails/UserDetails'

const ChatBody = () => {
  const [user, setUser] = useState()
  // console.log(user)
  return (
    <>
    <div className='chatbody__main'>
        <ChatList setUser={setUser}/>
        <ChatContent user={user}/>
        {user && <UserDetails user={user}/>}
        
    </div>
    </>
  )
}

export default ChatBody