
import { useState } from 'react';
import Navigation from '../../pages/NavFolder/Navigation';

import './Head.css';

const initialName = 'Erik Olson';
const reversedName = 'Kire Noslo';

// eslint-disable-next-line react/prop-types
export default function Header() {
  const [name, setName] = useState(initialName);
  

  const handleClick = () => {
    setName(name === initialName ? reversedName : initialName);
  };


  return (
    <header className='header'>
      <h1 className='header-title' onClick={handleClick}>{name}</h1>
      <Navigation />
    </header>
  )
}