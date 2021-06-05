import React from 'react';

const Form = () => {

  return (
    <div>
      <form className='search-form'>
          <div style ={{ width: 220}}>
            <Dropdown prompt='Select country...'
                      options={countries}
                      value={value}
                      onChange={val => setValue(val) }/>
        <button> Search Artist Library
          <input type='text' placeholder='type in names of artists'/>
        </button>
      </form>
    </div>
  )
}

export default Form;
