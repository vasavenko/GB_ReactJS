import { ADD_CHAT, DELETE_CHAT } from "../chatList/action"
import { ADD_MESSAGE, DELETE_MESSAGE,} from "./action"

const iniChats = {}

export const chatsReduser = (state = iniChats, { type, payload}) => {
  switch (type) {
    case ADD_MESSAGE:
      return {
        ...state,
        [payload.idChat]: [...state[payload.idChat], payload.message]
      }
    case DELETE_MESSAGE:{
      const newMess = {...state}
      newMess[payload.idChat] = newMess[payload.idChat].filter(
        ({ id }) => id !== payload.idMessage
      ) 
      return newMess
    }
    case ADD_CHAT:
      return {...state,
        [payload.id]:[]
      }
    case DELETE_CHAT:{
      const newMess = {...state}
      delete newMess[payload]
      return newMess
    }
    default:
      return state
  }
}