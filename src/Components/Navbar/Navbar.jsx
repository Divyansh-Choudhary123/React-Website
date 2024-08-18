import React from 'react'
import N from '../Navbar/Navbar.module.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
<ul className={`${N.ul}`}>
   <img src="https://shapemyskills.in/wp-content/uploads/2021/09/logo.webp" alt="" />
   <li><Link to="">Home</Link> </li>
   <li><Link to="/About">About Us</Link></li>
   <li><Link to="/Blog">Blog</Link></li>
   <li><Link to="/Service">Services</Link></li>
   <li><Link to="/Course">Courses</Link></li>
   <li><Link to="/Partners">Partners</Link></li>
   <li><Link to="/Contactus">Contact Us</Link></li>
</ul>
    </div>
  )
}

export default Navbar