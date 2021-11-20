import React, { useCallback, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button'
import { TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectChatList } from '../../store/chatList/salectors';
import { addChatToList, deleteChatFromList } from '../../store/chatList/action';
import { addChatToChats, deleteChatFromChats } from '../../store/chats/action';
import { v4 as uuidv4} from 'uuid'
import "./chatList.css"

export const ChatList = () => {
  const chats = useSelector(selectChatList)
  const dispatch = useDispatch()

  const [chatName, setChatName] = useState('')

  const setNewName = (e) => {
    setChatName(e.target.value)
  }

  const addNewChat = () => {
    const newChat = {name: chatName, id: uuidv4()}
    dispatch(addChatToList(newChat))
    dispatch(addChatToChats(newChat.id))
    setChatName('')
  }

  const deleteChat = useCallback((e) => {
    dispatch(deleteChatFromList(e.target.value))
    dispatch(deleteChatFromChats(e.target.value))
  },[dispatch])

  return (
    <div className='chatList'>
      <h3 className='h3'>List of chats</h3>
      <TextField
      autoComplete='off'
        value={chatName}
        id="standard-basic"
        label="New chat name"
        variant="standard"
        onChange={setNewName}
      />
      <Button variant="outlined" onClick={addNewChat}>Add chat</Button>
      <List>
        {chats.map((chat) => (
          <ListItem key={chat.id} disablePadding>
              <NavLink 
                style={({ isActive }) => ({ color: isActive ? "red" : "blue"})}
                to={`/chats/${chat.id}`}
              >
                <ListItemButton className='butt'>
                  <ListItemText primary={chat.name}/>
                </ListItemButton>
              </NavLink>
            <Button variant="text" value={chat.id} onClick={deleteChat}>&#10006;</Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
