import React from 'react'
import { Link } from 'react-router-dom'
// Style
import './Navbar.css'

// components
import Searchbar from '../components/Searchbar'
export default function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className='brand'>
          <h1>Cooking Ninja</h1>
        </Link>
        <Searchbar/>
        <Link to="/create">
          Create Recipe
        </Link>
      </nav>
    </div>
  )
}
