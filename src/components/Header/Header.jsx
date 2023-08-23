

import Navigation from '../NavFolder/Navigation.jsx';
import './Head.css';

// eslint-disable-next-line react/prop-types
export default function Header({ currentPage, setCurrentPage }) {
  return (
    <header >
      <h1>Erik Olson</h1>
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </header>
  )
}