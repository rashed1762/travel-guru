import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faCircleInfo, faCoffee, faContactBook, faHouse, faInfo, faUser } from '@fortawesome/free-solid-svg-icons'

const Navcomp = () => {
  return (
    <div >

        <div className='menunav'>
        <ul className="menu  rounded-full">
  <li>
  <NavLink to="/" as={Link}>
  <div className="tooltip" data-tip="home">
  <FontAwesomeIcon icon={faHouse} />
    </div>
    </NavLink>
  </li>
  <li>
  <NavLink to="/about" as={Link}>
  <div className="tooltip" data-tip="about">
  <FontAwesomeIcon icon={faCircleInfo} />
    </div>
    </NavLink>
  </li>
  <li>
  <NavLink to="/rooms" as={Link}>
  <div className="tooltip" data-tip="our rooms">
  <FontAwesomeIcon icon={faBuilding} />
    </div>
    </NavLink>
  </li>
  <li>
  <NavLink to="/contact" as={Link}>
  <div className="tooltip" data-tip="contact">
  <FontAwesomeIcon icon={faContactBook} />
    </div>
    </NavLink>
  </li>
  <li>
  <NavLink to="/login" as={Link}>
  <div className="tooltip" data-tip="login">
  <FontAwesomeIcon icon={faUser} />
    </div>
    </NavLink>
  </li>
</ul>
        </div>

        

    </div>
  )
}

export default Navcomp
