export const ADD_CHAT_TO_CHATS = "CHATS::ADD_CHAT_TO_CHATS"
export const DELETE_CHAT_FROM_CHATS = "CHATS::DELETE_CHAT_FROM_CHATS"
export const ADD_MESSAGE = "CHATS::ADD_MESSAGE"
export const DELETE_MESSAGE = "CHATS::DELETE_MESSAGE"

export const addChatToChats = (idChat) => ({
  type: ADD_CHAT_TO_CHATS,
  payload: idChat
})

export const deleteChatFromChats = (idChat) => ({
  type: DELETE_CHAT_FROM_CHATS,
  payload: idChat
})

export const addMessage = (idChat, message) => ({
  type: ADD_MESSAGE,
  payload: {idChat, message}
})

export const deleteMessage = (idChat, idMessage) => ({
  type: DELETE_MESSAGE,
  payload: {idChat, idMessage}
})