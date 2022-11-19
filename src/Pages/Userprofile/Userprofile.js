import React from 'react'
import './profile.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';

const Userprofile = () => {
    const [user] = useAuthState(auth);
  return (
    <div className='ml-20'>
        
        <div className="drawer infopart drawer-mobile">
            
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content ">
    <h1 className='text-5xl font-bold mb-6'>Welcome To Dashbord</h1>
    <Outlet></Outlet>
    
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side sidebar ">
    <label htmlFor="my-drawer-2" className="drawer-overlay "></label> 
    
    <ul className="menu  p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
        
      {/* <!-- Sidebar content here --> */}
      <div className='justifi-centre'>
      <div className="avatar">
  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbIXbnf515G0XvllWaKBfQgoezWKhukK6sCA&usqp=CAU" />
    
  </div>
</div>
      </div>
      <p className='mb-5'> Hello! <span className='font-bold '>{user.displayName}</span></p>
      <li className='bg-error rounded-lg'><Link to="/profile/mybooking"> My booking</Link></li>
      <br />
      <li className='bg-error rounded-lg'><Link to="/profile/alluser"> All Users</Link></li>
      <br />
      <li className='bg-error rounded-lg'><Link to="/profile/productBook"> My Product</Link></li>
    </ul>
  
  </div>
</div>


    </div>
  )
}

export default Userprofile;