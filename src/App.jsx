import React, { useEffect, useState } from 'react';
import { Container, Box } from '@mui/material';
import { fetchData } from './services/api';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import ItemList from './components/ItemList';

const App = () => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const getItems = async () => {
      const data = await fetchData();
      setItems(data);
    };
    getItems();
  }, []);

  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <NavBar />
      <Container>
        <Box my={4}>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <ItemList items={filteredItems} />
        </Box>
      </Container>
    </>
  );
};

export default App;
