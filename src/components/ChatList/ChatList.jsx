import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { NavLink } from 'react-router-dom';

const chatList = [
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

export const ChatList = () => {
  return (
    <div>
      <h3>List of chats</h3>
      <List>
        {chatList.map((chat) => (
          <ListItem key={chat.id} disablePadding>
            <ListItemButton>
              <NavLink 
                style={({ isActive }) => ({ color: isActive ? "red" : "blue"})}
                to={`/chats/${chat.id}`}
              >
               <ListItemText primary={chat.name}/>
              </NavLink>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
