import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

const ItemList = ({ items }) => {
  return (
    <List>
      {items.map((item) => (
        <ListItem key={item.id}>
          <ListItemText primary={item.title} secondary={item.body} />
        </ListItem>
      ))}
    </List>
  );
};

export default ItemList;
