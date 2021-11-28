import { Routes, Route } from "react-router";
import { BrowserRouter, Link} from "react-router-dom";
import { Posts } from "../Posts/posts";
import { ChatList } from "../ChatList/ChatList";
import Chats from "../Chats/chats";
import { Home } from "../Home/home";
import { Prifile } from "../Profile/profile";

export const Router = () => (
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
      <li>
        <Link to='/posts'>Posts</Link>
      </li>
    </ul>

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/profile' element={<Prifile />} />
      <Route path='posts' element={<Posts />} />
      <Route path="chats">
        <Route index element={<ChatList />} />
        <Route path=":chatId" element={<Chats />}/>
        </Route>
      <Route path='*' element={<h2>Not Found 404</h2>} />
    </Routes>
  </BrowserRouter>

)
