import React from 'react'
import './nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBuildingColumns, faCar,  faLocationDot,  faPhone,  faPlateWheat,  faVoicemail,  faWaveSquare } from '@fortawesome/free-solid-svg-icons'
import img1 from '../assestes/115-1152278_travel-png-images-travel-png-transparent-png-removebg-preview.png'
import { Link, NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content">
  <div>
    <img className='footerimg' src={img1} alt="" />
    <h1 className='text-4xl font-bold'>TravelGuru</h1>
  </div> 
  <div>
    <span className="footer-title">About Us</span> 
      <h1 className='font-bold'><FontAwesomeIcon className='text-1xl text-blue-900 ' icon={faPhone} />+880 01314540002</h1>
      <h1 className='font-bold mt-4'><FontAwesomeIcon className='text-1xl text-blue-900 ' icon={faLocationDot} />mymensingh</h1>
      <h1 className='font-bold mt-4'>Email: travelguru@gmail.com</h1>
  </div> 
  <div>
    <span className="footer-title">Pages</span> 
    <NavLink to='/' as={Link}>Home</NavLink>
    <NavLink to='/about' as={Link}>About Us</NavLink>
    <NavLink to='/destination' as={Link}>Destination</NavLink>
    <NavLink to='/product' as={Link}>Product</NavLink>
    <NavLink to='/profile' as={Link}>Profile</NavLink>
    <NavLink to='/contact' as={Link}>Contact</NavLink>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div>
</footer>
    </div>
  )
}

export default Footer;
