import React, { useCallback, useEffect, useState } from "react"
import {Form} from "./components/Form/Form"
import { v4 as uuidv4} from 'uuid'
import { AUTORS } from "./utils/constants"
import { MessageList } from "./components/MessageList/MessageList"
import { ListOfChat } from "./components/ListOfChats/ListOfChats"
import "./App.css"

function App() {
  const [messageList, setMessageList] = useState([])
// eslint-disable-next-line
  const [ chats, setChats] = useState([
    {
      name: "Chat1",
      id: uuidv4()
    },
    {
      name: "Chat2",
      id: uuidv4()
    },
    {
      name: "Chat3",
      id: uuidv4()
    }
  ])

  const handleSubmit = useCallback((newMessage) => {
    setMessageList(prevMessagelist => [...prevMessagelist, newMessage])
  }, [])

  useEffect(() => {
    if(
      messageList.length && 
      messageList[messageList.length-1].author !== 'Robot'
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

  return (
    <div className="App">
      <div className="list">
        <ListOfChat chats={chats}/>
      </div>
      <div>
        <Form onSubmitPost={handleSubmit}/>
        <MessageList messages={messageList} />
      </div>
    </div>
  )
}

export default App
