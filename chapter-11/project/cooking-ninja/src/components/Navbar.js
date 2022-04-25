import { React, useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../context/ThemedContext'

// Style
import './Navbar.css'

// components
import Searchbar from '../components/Searchbar'

export default function Navbar() {
  const { color } = useContext(ThemeContext)

  return (
    <div className="navbar" style={{ background: color }}>
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
