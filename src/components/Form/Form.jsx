import { TextField } from '@mui/material'
import Button from '@mui/material/Button'
import React, { useEffect, useRef, useState } from "react"
import { v4 as uuidv4} from 'uuid'
import { AUTORS } from "../../utils/constants"


export const Form = ({ onSubmitPost }) => {

  const inputRef = useRef()

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
        author: AUTORS.human, 
        id: uuidv4()
      })
      inputRef.current?.focus()
    setPostText("")
  }
  useEffect(() => {
    inputRef.current.focus()
  }, [])
  return (
    <form onSubmit={handleSubmit}>
      <TextField id="standard-basic" label="Message" variant="standard" value={postText} onChange={messageChange} inputRef={inputRef} />
      <Button type='submit' variant="outlined">Send</Button>
    </form>
  )
}
