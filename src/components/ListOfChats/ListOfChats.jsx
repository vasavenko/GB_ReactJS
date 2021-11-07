import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';


export const ListOfChat =  ({ chats }) => {
  return (
        <List>
          {chats.map((chat) => (
            <ListItem key={chat.id} disablePadding>
              <ListItemButton>
                <ListItemText primary={chat.name} sx={{textAlign: 'center'}}/>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
  );
}
