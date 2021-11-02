import React, { useCallback, useEffect, useState } from "react"
import {Form} from "./components/Form/Form"
import { v4 as uuidv4} from 'uuid'
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
            author: 'Robot',
            message: 'Ok',
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
        {messageList.map((mess) => <div key={mess.id}>{mess.author} {mess.message}</div>)}
    </div>
  )
}

export default App
