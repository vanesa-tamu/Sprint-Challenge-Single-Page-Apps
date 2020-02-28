import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";

export default function SearchForm({ characters}) {
  const [search, setSearch] = useState('')
  const [data, setData] = useState(characters)

  const handleInput = (e) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    let output = characters.filter(char => 
      char.name.toLowerCase().includes(search.toLowerCase())
    )
    setData(output)
  }, [search, characters])

  console.log('data!', data)
  return (
    <section className="search-form">
     <form>
       <label htmlFor='searching'>Search For:</label>
         <input 
            id='searching'
            placeholder='character'
            name='name'
            onChange={handleInput}
            value={search}
            type='text'
         />
     </form>
    </section>
  );
}
