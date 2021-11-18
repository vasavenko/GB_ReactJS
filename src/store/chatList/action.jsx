export const ADD_CHAT_TO_LIST = "CHATLIST::ADD_CHAT_TO_LIST"
export const DELETE_CHAT_FROM_LIST = "CHATLIST::DELETE_CHAT_FROM_LIST"

export const addChatToList = (newChat) => ({
  type: ADD_CHAT_TO_LIST,
  payload: newChat
})

export const deleteChatFromList = (id) => ({
  type: DELETE_CHAT_FROM_LIST,
  payload: id
})