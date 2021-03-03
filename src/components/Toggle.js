import React, { useState } from 'react';
import './Toggle.css';

function Toggle({
  defaultState = false,
  value = '',
  onChange,
}) {
  const [toogle, setToogle] = useState(defaultState);
  const handleChange = (e) => {
    const { value, checked } = e.target;
    setToogle(checked);
    onChange && onChange(value, checked);
  }
  return (
    <label className="toggle-container">
      <input className="toggle-input" type="checkbox" value={value} checked={toogle} onChange={handleChange}/>
      <div className="toggle"></div>
    </label>
  )
}

export default Toggle;
