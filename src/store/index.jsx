import { createStore, combineReducers } from "redux"; 
import { chatListReduser } from "./chatList/reducer";
import { chatsReduser } from "./chats/reduser";
import { profileReducer } from "./profile/reducer";

export const store = createStore(
  combineReducers({
    profile: profileReducer,
    chatList: chatListReduser,
    chats: chatsReduser
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
