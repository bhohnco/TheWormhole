import React from 'react';


const Form = () => {

  return (
    <div>
      <form>
        <label> Select Country
          <select>DROP DOWN</select>
        </label>
        <button>Search Artist Library
          <input placeholder='type in names of artists'/>
        </button>
      </form>
    </div>
  )
}


export default Form;
