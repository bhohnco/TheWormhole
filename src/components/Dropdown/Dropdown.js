import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { dropdownValues } from '../../actions';
import Select from 'react-select';
import apiCalls from '../../utilities/apiCalls';


let Dropdown= props => {
  const { input, options } = props;
  return (
      <Select
          {...input}
          onChange={value => input.onChange(value)}
          onBlur={() => input.onBlur(input.value)}
          options={options}
      />
  )
}
