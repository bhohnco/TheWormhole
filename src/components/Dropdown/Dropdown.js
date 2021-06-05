import React, { useState, useRef, useEffect } from 'react';

export default function Dropdown({ options, prompt, value, key, onChange, }) {

  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect (() => {
  document.addEventListener("click", close)
  return () => document.removeEventListener("click", close);
  }, []);

  function close(e) {
    setOpen(e && e.target === ref.current)
  }
  
  return (
      <div className='dropdown'>
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
                  onChange(option);
                  setOpen(false);
                  key = "{option}"
                }}>
                  {option}</div>
            ))}
        </div>
      </div>
  )
}

      