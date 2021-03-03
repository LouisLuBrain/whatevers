import React from 'react';
import Toggle from '../components/Toggle';

function TogglePage() {

  const handleToggle = (value, checked) => {
    console.log(`${value} is ${checked ? 'checked' : 'unchecked'}`);
  }

  return (
    <div>
      <Toggle onChange={handleToggle} value="HELLO!" defaultState={false}/>
    </div>
  )
}

export default TogglePage
