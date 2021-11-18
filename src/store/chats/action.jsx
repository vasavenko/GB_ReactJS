export const ADD_CHAT_TO_CHATS = "CHATS::ADD_CHAT_TO_CHATS"
export const DELETE_CHAT_FROM_CHATS = "CHATS::DELETE_CHAT_FROM_CHATS"
export const ADD_MESSSAGE = "CHATS::ADD_MESSAGE"

export const addChatToChats = (id) => ({
  type: ADD_CHAT_TO_CHATS,
  payload: id
})

export const deleteChatFromChats = (id) => ({
  type: DELETE_CHAT_FROM_CHATS,
  payload: id
})

export const addMessage = (id, message) => ({
  type: ADD_MESSSAGE,
  payload: id,
  newMess: message
})