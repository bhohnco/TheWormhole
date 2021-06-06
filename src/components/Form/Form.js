import React, {useState} from 'react';
import SearchBar from '../SearchBar/SearchBar'
import Dropdown from '../Dropdown/Dropdown'
import countries from '../../utilities/countries'

const Form = () => {

  const [value, setValue] = useState(null)

  return (
    <div className='form-box'>
      <form className='search-form'>
        <div className='drop-render' style ={{ width: 220}}>
          <Dropdown prompt='Select country...'
                    options={countries}
                    value={value}
                    onChange={val => setValue(val) }/>
        </div>
        <SearchBar />
      </form>
    </div>
  )
}

export default Form;
