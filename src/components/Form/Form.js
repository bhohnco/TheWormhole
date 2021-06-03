import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Dropdown from '../Dropdown/Dropdown';
import countries from '../../utilities/countries';

const Form = (props) => {
  const { handleSubmit } = props;
  return (
    <div>
      <form className='search-form'onSubmit={handleSubmit}>
        <label> Select Country
          <select>
            <Field name='country-select' component={Dropdown} options={userOptions} />
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
