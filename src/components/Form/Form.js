import React, {useState} from 'react';
import Dropdown from '../Dropdown/Dropdown'
import countries from '../../utilities/countries'

const Form = () => {

  const [value, setValue] = useState(null)

  return (
    <div>
      <form className='search-form'>
        <div className='drop-render' style ={{ width: 220}}>
          <Dropdown prompt='Select country...'
                    options={countries}
                    value={value}
                    onChange={val => setValue(val) }
          />
        </div>
        <button>Search Artist Library
          <input type='text' placeholder='type in names of artists'/>
        </button>
      </form>
    </div>
  )
}

export default Form;
