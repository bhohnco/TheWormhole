import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { location } from '../../actions';
import utils from '../../utilities/utils';

export default function Dropdown({ options, prompt, value, key, onChange, }) {

  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const dispatch = useDispatch();

  useEffect (() => {
    document.addEventListener("click", close)
    return () => document.removeEventListener("click", close);
  }, []);

  const selectLocation = (choice) => {
    dispatch(location(choice));
  }

  const close = (e) => {
    setOpen(e && e.target === ref.current)
  }

  return (
    <section className='dropdown' onClick={() => utils.lockScroll()}>
      <div className='control'
            onClick={() => setOpen((prev) => !prev)}
      >
      <div className='selected-value' ref={ref}>
        {value ? value : prompt}
      </div>
      <div className={`arrow ${open ? "open" : null}`} /></div>
        <div className={`options ${open ? "open" : null}`}>
          {options.map((option) => (
            <Link to='/' key={option}>
              <div
                className={`option ${value === option ? "selected" : null}`}
                key={option}
                onClick={() => {
                  onChange(option);
                  setOpen(false);
                  selectLocation(option);
                }}
              >
                {option}
              </div>
            </Link>
          ))}
        </div>
    </section>
  )
}
