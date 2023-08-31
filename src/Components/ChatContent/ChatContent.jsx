import React from 'react'
import ChatNav from '../ChatNav/ChatNav'
import './ChatContent.css'

const ChatContent = () => {
  return (
    <>
    <div className='chat__content__main'>
        <ChatNav isContent={true}/>
        
    </div>
    </>
  )
}

export default ChatContent