import React from 'react';
import Stats from './Stats.js';
import Stopwatch from './Stopwatch.js';

const Header = (props) => {
  return (
    <header>
      <Stats players={props.players}/>
      <h1 class="title">{props.title}</h1>
      <Stopwatch />
    </header>
  );
}

export default Header;
