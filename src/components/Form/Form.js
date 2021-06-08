import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import SearchBar from '../SearchBar/SearchBar'
import Dropdown from '../Dropdown/Dropdown'
import utils from '../../utilities/utils';
import countries from '../../utilities/countries';

const Form = () => {

  const [value, setValue] = useState(null)
  const location = useSelector(state => state.location);
  const formattedName = utils.formatCountryName(location.name);

  return (
      <section className='form-box'>
        <article className='search-form'>
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
          <h3 className='welcome-text'>welcome to ...</h3>
          <h2 className='location-name'>{formattedName}</h2>
        </div>
      </section>
  )
}

export default Form;