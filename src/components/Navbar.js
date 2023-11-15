import React from "react"
import { NavLink } from "react-router-dom"

export const Navbar = () =>{
  return(
    <>
      <nav className="navbar navbar-expand-md navbar-custom">
        <div className="container">
          <NavLink to="/" className="navbar-brand" style={{fontSize:30,fontWeight:600}}>Lift</NavLink>
          <button className="navbar-toggler" data-bs-toggle="collapse"
          data-bs-target="#nav" aria-controls="nav" aria-label="Expand Navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="nav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/" className="nav-link links">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/onerepmax" className="nav-link links">One Rep Max</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/smolov" className="nav-link links">Smolov</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/smolovjr" className="nav-link links">Smolov Jr.</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link links">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>   
      </nav> 
    </>
  )
}