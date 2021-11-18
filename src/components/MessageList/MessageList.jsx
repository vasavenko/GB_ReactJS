import React from "react";

export const MessageList = ({ messages }) => {
  return (
  <div >
    {messages.map((mesage) => (
      <div key={mesage.id}>
        <div>
        <span>{mesage.author}</span>: <span>{mesage.message}</span>

        </div>
      </div>
    ))}
  </div>
  )
}