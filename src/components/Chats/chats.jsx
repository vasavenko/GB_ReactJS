import React, { useCallback } from "react"
import {Form} from "../Form/Form"
import { MessageList } from "../MessageList/MessageList"
import { ChatList } from "../ChatList/ChatList"
import { Navigate, useParams } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { addMessageWithReply, deleteMessage } from "../../store/chats/action"
import { selectChats } from "../../store/chats/selectors"
import "./chats.css"

function Chats() {
  const { chatId } = useParams()
  
  const messageList = useSelector(selectChats)
  const dispatch = useDispatch()

  const handleSubmit = useCallback(
    (newMessage) => {
      dispatch(addMessageWithReply(chatId, newMessage))
  }, [chatId, dispatch])

  const dellMess = (idMes) => {
    dispatch(deleteMessage(chatId, idMes))
  }

  if (!messageList[chatId]) {
    return <Navigate replace to='/chats' />
  }

  return (
    <div className="App">
      <div className="list">
        <ChatList />
      </div>
      <div className='messages'>
        <Form onSubmitPost={handleSubmit}/>
        <MessageList messages={messageList[chatId]} delMess={dellMess}/>
      </div>
    </div>
  )
}

export default Chats
