import React, { useState } from "react"
import { v4 as uuidv4} from 'uuid'


export const Form = ({ onSubmitPost }) => {

  const [postText, setPostText] = useState("")
  // setPostText(post)
  
  const messageChange = e => {
    setPostText(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault()
    onSubmitPost(
      {
        message: postText, 
        author: 'User', 
        id: uuidv4()
      })
    setPostText("")
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={postText} onChange={messageChange} />
      <input type="submit" />
    </form>
  )
}

