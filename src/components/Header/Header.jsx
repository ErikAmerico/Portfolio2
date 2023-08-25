

import Navigation from '../NavFolder/Navigation.jsx';
import './Head.css';

// eslint-disable-next-line react/prop-types
export default function Header() {
  return (
    <header >
      <h1 className='header-title'>Erik Olson</h1>
      <Navigation />
    </header>
  )
}