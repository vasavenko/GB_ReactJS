import React, { useCallback, useEffect, useState } from "react"
import {Form} from "./components/Form/Form"
import { v4 as uuidv4} from 'uuid'
import { AUTORS } from "./utils/constants"
import { MessageList } from "./components/MessageList/MessageList"
import "./App.css"

function App() {
  const [messageList, setMessageList] = useState([])

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
      <header className="App-header">
        <Form onSubmitPost={handleSubmit}/>
      </header>
      <MessageList messages={messageList} />
    </div>
  )
}

export default App
