import React, { useState } from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { ChatList } from "./components/ChatList/ChatList";
import Chats from "./components/Chats/chats";
import { Home } from "./components/Home/home";
import { Prifile } from "./components/Profile/profile";
import { v4 as uuidv4} from 'uuid'
import { AUTORS } from "./utils/constants"



export const App = () => {

  const iniMessage = {
    chat1: [
      {
        message: '1',
        author: AUTORS.human,
        id: uuidv4()
      }
    ], 
    chat2: [
      {
        message: '2',
        author: AUTORS.human,
        id: uuidv4()
      }
    ],
    chat3: [],
  }
  const iniChatList = [
    {
      name: "chat1",
      id: 'chat1'
    },
    {
      name: "chat2",
      id: 'chat2'
    },
    {
      name: "chat3",
      id: 'chat3'
    }
  ]
  
  const [messageList, setMessageList] = useState(iniMessage)
  const [chats, setChats] = useState(iniChatList)

  const newChat= (name) => {
    const newChat = {name: name, id: uuidv4()}
    setChats(pervChats => [...pervChats, newChat])
    setMessageList((prevMessageList) => ({...prevMessageList, [newChat.id]:[] }))
  }
  const delChat = (idd) => {
    setChats((prevChats) => prevChats.filter(item => item.id !== idd))
    const ml = Object(messageList)
    delete ml[`${idd}`]
    setMessageList((prms) => ml)


  }

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
          element={<ChatList 
            chatList={chats}
            newChat={newChat}
            delChat={delChat}
          />}
        />
        <Route 
          path=":chatId"
          element={
            <Chats messageList={messageList}
                  setMessageList={setMessageList}
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