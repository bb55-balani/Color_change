import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
       <nav className={`navbar navbar-expand-lg navbar-dark bg-dark`}>
            <NavLink className="navbar-brand" to="/">Navbar</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-NavLink" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-NavLink" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-NavLink" to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}
