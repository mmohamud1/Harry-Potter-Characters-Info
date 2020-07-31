import React, { useState, useEffect } from 'react';
import Header from './Header';
import CharacterGrid from './CharacterGrid'
import './App.css';
import axios from 'axios';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  // fetch http request as soon a the app loads
  useEffect(() => {
    const fetchItems = async () => {
      const res = await axios.get(`https://hp-api.herokuapp.com/api/characters`);
      //console.log(res.data);
      setCharacters(res.data);
      setIsLoading(false);
    }
    fetchItems();
  }, []) 

  return (
    <div className="container">
      <Header />

      <CharacterGrid isLoading={isLoading} characters={characters}/>
    </div>
  );
}

export default App;
