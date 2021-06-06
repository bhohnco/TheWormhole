import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import SearchBar from '../SearchBar/SearchBar'
import Dropdown from '../Dropdown/Dropdown'
import countries from '../../utilities/countries'

const Form = () => {

  const [value, setValue] = useState(null)
  const location = useSelector(state => state.location);

  return (
      <section className='form-box'>
        <form className='search-form'>
          <div className='drop-render'>
            <Dropdown prompt='Select country...'
                      options={countries}
                      value={value}
                      onChange={val => setValue(val) }/>
          </div>
          <SearchBar />
        </form>
        <div className='location-message'>
          <h3 className='welcome-text'>welcome to ...</h3>
          <h2 className='location-name'>{location.name}</h2>
        </div>
      </section>
  )
}

export default Form;
