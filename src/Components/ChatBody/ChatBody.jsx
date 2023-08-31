import React from 'react'
import './ChatBody.css'
import ChatList from '../ChatList/ChatList'
import ChatContent from '../ChatContent/ChatContent'

const ChatBody = () => {
  return (
    <div className='chatbody__main'>
        <ChatList/>
        <ChatContent/>
    </div>
  )
}

export default ChatBody