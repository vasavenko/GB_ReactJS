import { AUTHORS } from "../../utils/constants"
import { v4 as uuidv4} from 'uuid'

export const ADD_MESSAGE = "CHATS::ADD_MESSAGE"
export const DELETE_MESSAGE = "CHATS::DELETE_MESSAGE"

export const addMessage = (idChat, message) => ({
  type: ADD_MESSAGE,
  payload: {idChat, message}
})

export const deleteMessage = (idChat, idMessage) => ({
  type: DELETE_MESSAGE,
  payload: {idChat, idMessage}
})

let timeout

export const addMessageWithReply = (idChat, message) => (dispatch) => {
  dispatch(addMessage(idChat, message))

  if (message.author !== AUTHORS.bot) {
    if (timeout) {
      clearTimeout(timeout)
    }

    timeout = setTimeout(() => {
      const botMessage = {
        author: AUTHORS.bot,
        message: "Ok",
        id: uuidv4()
      }
      dispatch(addMessage(idChat, botMessage))
    }, 1000)
  }
}