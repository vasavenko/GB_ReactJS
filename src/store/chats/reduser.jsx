import { ADD_CHAT_TO_CHATS, ADD_MESSSAGE, DELETE_CHAT_FROM_CHATS } from "./action"

const iniChats = {}

export const chatsReduser = (state = iniChats, { type, payload, newMess}) => {
  switch (type) {
    case ADD_CHAT_TO_CHATS:
      return {...state, [payload]:[]}
    case DELETE_CHAT_FROM_CHATS:
      const ml = {...state}
      delete ml[payload]
      return ml
    case ADD_MESSSAGE:
      return {...state, [payload]: [...state[payload], newMess]}
    default:
      return state
  }
}