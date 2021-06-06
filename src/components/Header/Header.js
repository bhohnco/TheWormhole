import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../assets/images/night-sky.jpeg';

const Header = () => {

  return (
    <header className='header-wrapper' style={{ backgroundImage: `url(${Banner})`}}>
      <h1 className='glow'>wormhole</h1>
      <nav>
        <Link to='/'>
          <button className='random-location'>Randomize Me</button>
        </Link>
        <Link to='/'>
          <button className='go-home'>Return Home</button>
        </Link>
      </nav>
    </header>
  )
}

export default Header;
