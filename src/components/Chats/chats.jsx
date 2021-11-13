import React, { useCallback, useEffect } from "react"
import {Form} from "../Form/Form"
import { v4 as uuidv4} from 'uuid'
import { AUTORS } from "../../utils/constants"
import { MessageList } from "../MessageList/MessageList"
import { ChatList } from "../ChatList/ChatList"
import { Navigate, useParams } from "react-router"
import "./chats.css"

function Chats({ messageList, setMessageList, chatList, newChat, delChat }) {
  const { chatId } = useParams()

  const handleSubmit = useCallback(
    (newMessage) => {
      setMessageList((prevMessagelist) => ({
        ...prevMessagelist,
        [chatId]: [...prevMessagelist[chatId], newMessage],
      }))
  // eslint-disable-next-line
  }, [chatId])

  useEffect(() => {
    if(
      messageList[chatId]?.length && 
      messageList[chatId]?.[messageList[chatId]?.length-1].author !== 'Robot'
    ) {
      const int = setTimeout(
        () => 
          handleSubmit({
            author: AUTORS.bot,
            message: "Ok",
            id: uuidv4()
          }),
        500
      )
      return () => clearTimeout(int)
    }
// eslint-disable-next-line
  }, [messageList])

  if (!messageList[chatId]) {
    return <Navigate replace to='/chats' />
  }

  return (
    <div className="App">
      <div className="list">
        <ChatList chatList={chatList} newChat={newChat} delChat={delChat}/>
      </div>
      <div className='messages'>
        <Form onSubmitPost={handleSubmit}/>
        <MessageList messages={messageList[chatId]} />
      </div>
    </div>
  )
}

export default Chats
