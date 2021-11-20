import { ADD_CHAT_TO_CHATS, ADD_MESSAGE, DELETE_CHAT_FROM_CHATS, DELETE_MESSAGE } from "./action"

const iniChats = {}

export const chatsReduser = (state = iniChats, { type, payload}) => {
  switch (type) {
    case ADD_CHAT_TO_CHATS:
      return {...state, [payload]:[]}
      
    case DELETE_CHAT_FROM_CHATS:
      const ml = {...state}
      delete ml[payload]
      return ml

    case ADD_MESSAGE:
      return {...state, 
        [payload.idChat]: [...state[payload.idChat], payload.message]
      }

    case DELETE_MESSAGE:
      const NewMess = {...state}
      NewMess[payload.idChat] = NewMess[payload.idChat].filter((mes) => mes.id !== payload.idMessage) 
      return NewMess

    default:
      return state
  }
}