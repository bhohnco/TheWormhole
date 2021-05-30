import React from 'react';


const Form = () => {

  return (
    <div>
      <form className='search-form'>
        <label> Select Country
          <select>
            <option className='drop-down' value='dropDown'>DROP DOWN</option>
          </select>
        </label>
        <button>Search Artist Library
          <input type='text' placeholder='type in names of artists'/>
        </button>
      </form>
    </div>
  )
}


export default Form;
