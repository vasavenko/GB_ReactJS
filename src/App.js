import React, { useCallback} from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ChatList } from "./components/ChatList/ChatList";
import Chats from "./components/Chats/chats";
import { Prifile } from "./components/Profile/profile";
import { v4 as uuidv4} from 'uuid'
import { addChatToList, deleteChatFromList } from "./store/chatList/action";
import { Home } from "./components/Home/home";
import { addChatToChats, deleteChatFromChats } from "./store/chats/action";
import { selectChatList } from "./store/chatList/salectors";

export const App = () => {

  const chats = useSelector(selectChatList)
  const dispatch = useDispatch()

  const newChat= useCallback((name) => {
    const newChat = {name: name, id: uuidv4()}
    dispatch(addChatToList(newChat))
    dispatch(addChatToChats(newChat.id))
  }, [dispatch])

  const delChat = useCallback((idd) => {
    dispatch(deleteChatFromList(idd))
    dispatch(deleteChatFromChats(idd))
  },[dispatch])

  return (
    <BrowserRouter>
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/profile'>Profule</Link>
      </li>
      <li>
        <Link to='/chats'>Chats</Link>
      </li>
    </ul>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Prifile />} />
        <Route path="chats">
          <Route index
            element={
            <ChatList 
              chatList={chats}
              newChat={newChat}
              delChat={delChat}
            />}
          />
          <Route 
            path=":chatId"
              element={
                <Chats 
                  chatList={chats}
                  newChat={newChat}
                  delChat={delChat}

              />
            }/>
          </Route>
        <Route path='*' element={<h2>Not Found 404</h2>} />
      </Routes>
    </BrowserRouter>
  )
}