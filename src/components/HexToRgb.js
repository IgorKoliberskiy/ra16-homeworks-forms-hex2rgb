import React, { useState } from 'react';

const hexToRgb = (hex) => {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  return result ? `rgb(${[1, 2, 3].map((o) => parseInt(result[o], 16)).join(', ')})` : false;
}

export default function HexToRgb() {
  const [hex, setHex] = useState('')
  const [rgb, setRgb] = useState('')
  
  const handleSetColor = (evt) => {
    const { value } = evt.target;

    setHex(value);

    const app = document.querySelector('.App');

    if (value.length === 7 && value[0] === '#') {
      setRgb(hexToRgb(value))
      app.style.backgroundColor = value
    } 
  }
  
  return (
    <form>
      <input
        className='hex'
        type='text' 
        value={hex} 
        onChange={handleSetColor} 
        maxLength={7} 
      />
      <br />
      <input 
        className='rgb'
        type='text'
        value={rgb ? rgb : 'Введите значение HEX'} 
        disabled 
      />
    </form>
  )
} 