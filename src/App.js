import React from "react";
import Header from "./components/Header.js";

import { Link, Route } from 'react-router-dom';

import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';

export default function App() {

  return (
    <main>
      <Header />
      <div>
        <Link to='/'>Home</Link>
        <Link to='/characters'>Characters</Link>
      </div>

      <Route exact path='/' render={props => <WelcomePage {...props} />}/>
      <Route path='/characters' render={props => <CharacterList {...props} />}/>
    </main>
  );
}
