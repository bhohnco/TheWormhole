import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import AsyncSelect from 'react-select/async'
import { Link } from 'react-router-dom';
import apiCalls from '../../utilities/apiCalls'
// import {}

export default function Dropdown({ options, prompt, value, key, onChange, }) {

  const dispatch = useDispatch();
  
  const [open, setOpen, showSelectedCountry ] = useState(false);
  
  const ref = useRef(null);

  useEffect (() => {
  document.addEventListener("click", close)
    // document.addEventListener('click', handleClick(value))
  return () => document.removeEventListener("click", close);
  }, []);

  function close(e) {
    console.log(e.target)
    setOpen(e && e.target === ref.current)
  }
  
  // const showSelectedCountry(country){
  //   apiCalls.getSelectedCountry(country)
  // }

  
   

  return (
      <section className='dropdown'>
        <div className='control'
             onClick={() => setOpen((prev) => !prev)}
        >
          <div className='selected-value' ref={ref}>
          {value ? value : prompt}
          </div>
          <div className={`arrow ${open ? "open" : null}`} />
        </div>
        <div className={`options ${open ? "open" : null}`}>
          {options.map((option) => (
                <div
                  className={`option ${value === option ? "selected" : null}`}
                  key = {option}
                  onClick={() => {
                    onChange=(option);
                    setOpen(false);
                    }}
                >
                    {option}
                </div>
            ))}
        </div>
      </section>
  )
}
