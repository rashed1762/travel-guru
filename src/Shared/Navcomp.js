import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faCircleInfo, faCoffee, faContactBook, faHouse, faInfo, faLuggageCart, faPersonWalkingArrowRight, faPlaneArrival, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../firebase.init'
import { signOut } from 'firebase/auth'

const Navcomp = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
    localStorage.removeItem('accessToken');
};
  return (
    <div >

        <div className='menunav ml-2'>
        <ul className="menu  rounded-full">
  <li>
  <NavLink to="/" as={Link}>
  <div className="tooltip w-10 rounded-full" data-tip="home">
  <FontAwesomeIcon icon={faHouse} />
    </div>
    </NavLink>
  </li>
  <li>
  <NavLink to="/about" as={Link}>
  <div className="tooltip w-10 rounded-full" data-tip="about">
  <FontAwesomeIcon icon={faCircleInfo} />
    </div>
    </NavLink>
  </li>

  <li>
  <NavLink to="/destination" as={Link}>
  <div className="tooltip w-10 rounded-full" data-tip="Destination">
  <FontAwesomeIcon icon={faPlaneArrival} />
    </div>
    </NavLink>
  </li>


  <li>
  <NavLink to="/product" as={Link}>
  <div className="tooltip w-10 rounded-full" data-tip="Products">
  <FontAwesomeIcon icon={faLuggageCart} />
    </div>
    </NavLink>
  </li>
 
  <li>
  <NavLink to="/contact" as={Link}>
  <div className="tooltip w-10 rounded-full " data-tip="contact">
  <FontAwesomeIcon icon={faContactBook} />
    </div>
    </NavLink>
  </li>

  <li>
  <div className="dropdown dropdown-start "  >
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://previews.123rf.com/images/anwarsikumbang/anwarsikumbang1502/anwarsikumbang150200453/36649752-man-avatar-user-picture-cartoon-character-vector-illustration.jpg" />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <p className='text-accent font-bold'> Hi ! </p>
          <NavLink to="/profile " as={Link}>

          
          <a className="justify-between">
            Profile
            
            
          </a>
          </NavLink>
        </li>
        <li>
  
  <div  >
  {
              user?  
              
              <button className="navstyle tooltip" data-tip="logout" onClick={logout} >Log Out</button> :
                 <NavLink className="navstyle tooltip" data-tip="login" to="/login" as={Link}>Log In</NavLink> 
            }
    </div>

  </li>
      </ul>
    </div>
  </li>





 
</ul>
        </div>

        

    </div>
  )
}

export default Navcomp
