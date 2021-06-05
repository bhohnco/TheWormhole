import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../assets/images/night-sky.jpeg';

const Header = () => {

  return (
    <header style={{ backgroundImage: `url(${Banner})`}}>
      <h1 className='glow'>W o r m h o l e</h1>
      <nav>
        <Link exact to='/'>
          <button className='random-location'>Randomize Location</button>
        </Link>
        <Link exact to='/'>
          <button className='go-home'>Return Home</button>
        </Link>
      </nav>
    </header>
  )
}

export default Header;
