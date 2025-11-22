'use client'

import { useState } from 'react'
import AuthButton from './AuthButton'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className="nav-container">
      <div className="nav-content">
        <div className="logo">
          <span className="logo-text">CONCRETE</span>
          <span className="logo-sub">RUNNERS</span>
        </div>
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`} id="navMenu">
          <a href="#home" className="nav-link" onClick={() => setIsMenuOpen(false)}>HOME</a>
          <a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>ABOUT</a>
          <a href="#events" className="nav-link" onClick={() => setIsMenuOpen(false)}>EVENTS</a>
          <a href="#members" className="nav-link" onClick={() => setIsMenuOpen(false)}>MEMBERS</a>
          <a href="#contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>CONTACT</a>
          <div style={{ marginLeft: '20px' }}>
            <AuthButton />
          </div>
        </div>
        <div className={`nav-toggle ${isMenuOpen ? 'active' : ''}`} id="navToggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}
