import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { ChatList } from "./components/ChatList/ChatList";
import Chats from "./components/Chats/chats";
import { Home } from "./components/Home/home";
import { Prifile } from "./components/Profile/profile";

export const App = () => (
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
        <Route index element={<ChatList />} />
        <Route path=":chatId" element={<Chats />} />
      </Route>
      <Route path='*' element={<h2>Not Found 404</h2>} />
    </Routes>
  </BrowserRouter>
)