
import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center sticky top-0 z-50">
      <Link to="/" className="text-2xl font-bold text-leaf">Ogholders</Link>
      <div className="space-x-4">
        <Link to="/" className="hover:text-leaf">Home</Link>
        <Link to="/about" className="hover:text-leaf">About</Link>
        <Link to="/contact" className="hover:text-leaf">Contact</Link>
      </div>
    </nav>
  )
}
