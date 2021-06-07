import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Dropdown({ options, prompt, value, key, onChange, }) {

  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect (() => {
    document.addEventListener("click", close)
    return () => document.removeEventListener("click", close);
  }, []);

  function close(e) {
    console.log(e.target.innerText);
    setOpen(e && e.target === ref.current)
  }

  return (
    <section className='dropdown'>
      <div className='control'
            onClick={() => setOpen((prev) => !prev)}
      >
      <div className='selected-value' ref={ref}>
        {value ? value : prompt}
      </div>
      <div className={`arrow ${open ? "open" : null}`} /></div>
      <Link to='/'>
        <div className={`options ${open ? "open" : null}`}>
          {options.map((option) => (
            <div
              className={`option ${value === option ? "selected" : null}`}
              key = {option}
              onClick={() => {
                onChange(option);
                setOpen(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      </Link>
    </section>
  )
}
