import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { location } from '../../actions';
import utils from '../../utilities/utils';
import Banner from '../../assets/images/night-sky.jpeg';

const Header = () => {

  const dispatch = useDispatch();

  const randomizeLocation = async () => {
    const newLocation = await utils.getRandomLocation();
    dispatch(location(newLocation));
  }

  return (
    <header className='header-wrapper' style={{ backgroundImage: `url(${Banner})`}}>
      <h1 className='glow'>wormhole</h1>
      <nav>
        <Link to='/'>
          <button onClick={() => randomizeLocation()} className='random-location'>Randomize Me</button>
        </Link>
        <Link to='/'>
          <button className='go-home'>Return Home</button>
        </Link>
      </nav>
    </header>
  )
}

export default Header;
