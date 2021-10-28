import React from 'react'
import './Message.css'

export const Message = ({ message, onMessageClick }) => {
  return (
    <h3 className='h3' onClick={onMessageClick}>{ message }</h3>
  )
} 