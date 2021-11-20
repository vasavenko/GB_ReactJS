import React, { useCallback } from "react";
import { Button } from "@mui/material";
import './MessageList.css'

export const MessageList = ({ messages, delMess}) => {

  const deleteChat = useCallback((e) => {
    delMess(e.target.value)
  }, [delMess])
  return (
  <div >
    {messages.map((mesage) => (
      <div key={mesage.id}>
        <div className='message'>
          <div>
            <span>{mesage.author}</span>: <span>{mesage.message}</span>
          </div>
          <Button variant="text" value={mesage.id} onClick={deleteChat}>&#10006;</Button>

        </div>
      </div>
    ))}
  </div>
  )
}