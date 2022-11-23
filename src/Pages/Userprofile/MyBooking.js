import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './profile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom';


const MyBooking = () => {
    const [booking,setBooking]=useState([]);
    const [user]=useAuthState(auth);
   
  
  
    useEffect(()=>{
        if(user){

        
      fetch(`http://localhost:5000/booking?useremail=${user.email}`)
      .then(res=>res.json())
      .then(data=>setBooking(data));
        }
  },[user])

 console.log(user)
  

  return (
    <div>
        <p>total booking :{booking.length}</p>

        <div className="overflow-x-auto">
  <table className="table w-full">
   
    <thead>
      <tr>
        <th></th>

        
        <th>User Name</th>
        <th>Hotel Name</th>
        <th>Check-in Date</th>
        <th>Check-Out Date</th>
        <th>price</th>
        <th>Pay</th>
        <th>Manage Item</th>
      </tr>
    </thead>
    <tbody>
      {
        booking.map(rooms=>
            <tr>
            <th> <FontAwesomeIcon icon={faDatabase} /></th>
            <td>{rooms.username}</td>
            <td className='font-bold'> {rooms.name} <img className='bookingimg' src={rooms.img} alt="" /></td>
            <td>{rooms.month} {rooms.checkindate}</td>
            <td>{rooms.month} {rooms.checkoutdate}</td>
            <td className='font-bold'>{rooms.price}</td>
            <td className='font-bold'><NavLink to={`profile/payment/${rooms._id}`} as={Link}><button className="btn btn-sm">Pay</button></NavLink> </td>
            <td className='font-bold'><button className="btn btn-sm">Remove</button></td>
          </tr>)
      }
     
      
      
    </tbody>
  </table>
</div>


      
    </div>
  )
}

export default MyBooking;
