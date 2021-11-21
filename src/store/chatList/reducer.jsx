import { ADD_CHAT, DELETE_CHAT } from "./action"

const iniChatList = []

export const chatListReduser = (state = iniChatList, { type, payload }) => {
  switch (type) {
    case ADD_CHAT:
      return [...state, payload]
    case DELETE_CHAT:
      return state.filter(({ id }) => id !== payload) 
    default:
      return state
  }
}