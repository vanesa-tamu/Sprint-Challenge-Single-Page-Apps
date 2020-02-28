import React, { useEffect, useState } from "react";
import axios from 'axios'
import SearchForm from './SearchForm.js'

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/')
    .then( res => {
      console.log(res);
      setCharacters(res.data.results);
    })
    .catch(err => console.error("Error:", err));
  }, []);

  return (
    <>
      <section className="character-list">
        <SearchForm characters={characters}/>
      </section>
    </>
  );
}