

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return <>
<nav className="navbar navbar-expand-lg py-4 ">
  <div className="container">
    <Link className="navbar-brand  text-white fw-bolder" to="/home">START FRAMEWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active text-white text-uppercase  fw-bolder" aria-current="page" to="/About" activeClassName="active">about</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white text-uppercase fw-bolder" to="/portfolio">portfolio</Link> 
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white text-uppercase fw-bolder" to="/Contact" >contact</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>    
    
    
    
    </>
  }
}
