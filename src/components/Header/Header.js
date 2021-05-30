import React from 'react';
import Banner from '../../assets/images/night-sky.jpeg';

const Header = () => {

  return (
    <header style={{ backgroundImage: `url(${Banner})`}}>
      <h1 className='glow'>W o r m h o l e</h1>
      <nav>
        <button className='random-location'>Randomize Music Location</button>
        <button className='go-home'>Return Home</button>
      </nav>
    </header>
  )
}


export default Header;
