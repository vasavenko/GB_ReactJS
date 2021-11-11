import React, { useCallback, useEffect, useState } from "react"
import {Form} from "../Form/Form"
import { v4 as uuidv4} from 'uuid'
import { AUTORS } from "../../utils/constants"
import { MessageList } from "../MessageList/MessageList"
import { ChatList } from "../ChatList/ChatList"
import "./chats.css"
import { Navigate, useParams } from "react-router"

const iniMessage = {
  chat1: [
    {
      message: '1',
      author: AUTORS.human,
      id: uuidv4()
    }
  ], 
  chat2: [
    {
      message: '2',
      author: AUTORS.human,
      id: uuidv4()
    }
  ],
  chat3: [],
}

function Chats() {
  const { chatId } = useParams()

  const [messageList, setMessageList] = useState(iniMessage)

  const handleSubmit = useCallback(
    (newMessage) => {
      setMessageList((prevMessagelist) => ({
        ...prevMessagelist,
        [chatId]: [...prevMessagelist[chatId], newMessage],
      }))
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
        <ChatList />
      </div>
      <div>
        <Form onSubmitPost={handleSubmit}/>
        <MessageList messages={messageList[chatId]} />
      </div>
    </div>
  )
}

export default Chats
