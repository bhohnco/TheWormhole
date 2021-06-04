import React from 'react';
import Dropdown from '../Dropdown/Dropdown'
import countries from '../../utilities/countries'

const Form = () => {

  return (
    <div>
      <form className='search-form'>
        <label> 
          <Dropdown title="Select Country" items={countries} />
        </label>
        <button>Search Artist Library
          <input type='text' placeholder='type in names of artists'/>
        </button>
      </form>
    </div>
  )
}

export default Form;
