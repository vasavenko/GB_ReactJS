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
import { addChat, delChat } from '../../store/chatList/action';
import { v4 as uuidv4} from 'uuid'
import "./chatList.css"

export const ChatList = () => {
  const chatList = useSelector(selectChatList)
  const dispatch = useDispatch()

  const [chatName, setChatName] = useState('')

  const setNewName = (e) => {
    setChatName(e.target.value)
  }

  const addNewChat = () => {
    const newChat = {name: chatName, id: uuidv4()}
    dispatch(addChat(newChat))
    setChatName('')
  }

  const deleteChat = useCallback((e) => {
    dispatch(delChat(e.target.value))
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
        {chatList.map((chat) => (
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
