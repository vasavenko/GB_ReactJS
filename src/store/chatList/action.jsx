export const ADD_CHAT = "CHATLIST::ADD_CHAT"
export const DELETE_CHAT = "CHATLIST::DELETE_CHAT"

export const addChat = (newChat) => ({
  type: ADD_CHAT,
  payload: newChat
})

export const delChat = (idChat) => ({
  type: DELETE_CHAT,
  payload: idChat
})