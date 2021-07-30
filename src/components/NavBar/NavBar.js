import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import SearchBar from '../SearchBar/SearchBar'
import Dropdown from '../Dropdown/Dropdown'
import utils from '../../utilities/utils';
import countries from '../../assets/datasets/countries';

const NavBar = () => {

  const [value, setValue] = useState(null)
  const location = useSelector(state => state.location);
  const formattedName = utils.formatCountryName(location.name);

  return (
      <section className='nav-bar'>
        <article className='nav-fields'>
          <div className='drop-render'>
            <Dropdown prompt='Select country...'
                      options={countries}
                      value={value}
                      onChange={val => setValue(val) }
            />
          </div>
          <SearchBar />
        </article>
        <div className='location-message'>
          <span className='welcome-text'>welcome to ...</span>
          <h2 className='location-name'>{formattedName}</h2>
        </div>
      </section>
  )
}

export default NavBar;