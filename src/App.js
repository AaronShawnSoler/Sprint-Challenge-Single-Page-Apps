import React from "react";
import Header from "./components/Header.js";

import { Link, Route } from 'react-router-dom';

import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';

import styled from 'styled-components';

const ButtonStyle = styled.button`
  border: none;
  margin: 0 16px;
  padding: 8px;
  border-radius: 16px;
  background: #333;
  color: #fff;
`;

export default function App() {

  return (
    <main>
      <Header />
      <div>
        <Link to='/'><ButtonStyle>Home</ButtonStyle></Link>
        <Link to='/characters'><ButtonStyle>Characters</ButtonStyle></Link>
      </div>

      <Route exact path='/' render={props => <WelcomePage {...props} />}/>
      <Route path='/characters' render={props => <CharacterList {...props} />}/>
    </main>
  );
}
