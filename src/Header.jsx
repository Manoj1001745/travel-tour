import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Category from './Category'
import Details from './Details'
import About from './About'
import Contactus from './Contactus'

function Header() {
  return (
    <>
   <nav className="navbar navbar-expand-lg bg">
  <div className="container ">
    
    <a className="navbar-brand fw-bold" href="#">Khadka-Travel center</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav gap-5 align-items-right">
        <li className="nav-item">
          <Link className="nav-link active fw-bold" aria-current="page" to="/">Home</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link active fw-bold" aria-current="page" to="/about">About Us</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link active fw-bold" aria-current="page" to="/contactus">contact us</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

<Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/contactus' element={<Contactus/>} />
    <Route path='/category/:cid/' element={<Category/>} />
    <Route path='/details/:id/' element={<Details/>} />
</Routes>

    </>

    
  )
}

export default Header