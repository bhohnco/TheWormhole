import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { location } from '../../actions';
import utils from '../../utilities/utils';
import Banner from '../../assets/images/night-sky.jpeg';

const Header = () => {

  const dispatch = useDispatch();

  const assignRandomLocation = async () => {
    const locationName = await utils.getRandomLocation();
    dispatch(location(locationName));
  }

  return (
    <header className='header-wrapper' style={{ backgroundImage: `url(${Banner})`}}>
      <h1 className='glow'>wormhole</h1>
      <nav>
        <Link to='/'>
          <button onClick={() => assignRandomLocation()} className='random-location'>Randomize Me</button>
        </Link>
        <Link to='/'>
          <button className='go-home'>Return Home</button>
        </Link>
      </nav>
    </header>
  )
}

export default Header;
