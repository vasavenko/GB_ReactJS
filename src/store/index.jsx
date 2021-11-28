import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { chatListReduser } from "./chatList/reducer";
import { chatsReduser } from "./chats/reduser";
import { profileReducer } from "./profile/reducer";
import thunk from 'redux-thunk'
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import { postsReducer } from "./posts/reduser";

const composeEnhansers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const config = {
  key: 'gbMsngr',
  storage,
  blacklist: ['profile', 'posts'],
}

const persistedReducer = persistReducer(
  config,
  combineReducers({
    profile: profileReducer,
    chatList: chatListReduser,
    chats: chatsReduser,
    posts: postsReducer
}))

export const store = createStore(
  persistedReducer,
  composeEnhansers(applyMiddleware(thunk))
)
export const persistor = persistStore(store)
