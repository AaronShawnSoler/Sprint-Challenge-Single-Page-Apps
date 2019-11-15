import React, { useEffect, useState } from "react";
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';

import axios from "axios";
import styled from 'styled-components';

const PaddedDiv = styled.div`
  padding: 24px 0;
`;

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [characterData, setCharacterData] = useState([]);
  const [filterCharacters, setFilterCharacters] = useState([]);

  useEffect(() => {
    const fetchData = () => 
      axios.get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        console.log(res.data.results);
        setCharacterData(res.data.results);
      });
      fetchData();
  }, []);

  useEffect(() => {
    setFilterCharacters(characterData);
  }, [characterData]);

  return (
    <section className="character-list">
      <PaddedDiv><SearchForm filter={setFilterCharacters} data={characterData}/></PaddedDiv>
      {filterCharacters.map((element, index) => <CharacterCard data={element} key={index}/>)}
    </section>
  );
}
