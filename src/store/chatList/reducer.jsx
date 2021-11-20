import { ADD_CHAT_TO_LIST, DELETE_CHAT_FROM_LIST } from "./action"

const iniChatList = []

export const chatListReduser = (state = iniChatList, { type, payload }) => {
  switch (type) {

    case ADD_CHAT_TO_LIST:
      return [...state, payload]

    case DELETE_CHAT_FROM_LIST:
      return state.filter(({ id }) => id !== payload) 

    default:
      return state
  }
}