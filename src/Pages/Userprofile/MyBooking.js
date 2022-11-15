import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './profile.css'

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
        <th>Hotle Name</th>
        <th>Check in Date</th>
        <th>Check Out Date</th>
        <th>price</th>
        <th>Manage Item</th>
      </tr>
    </thead>
    <tbody>
      {
        booking.map(rooms=>
            <tr>
            <th>1</th>
            <td>{rooms.username}</td>
            <td className='font-bold'> {rooms.name} <img className='bookingimg' src={rooms.img} alt="" /></td>
            <td>{rooms.month} {rooms.checkindate}</td>
            <td>{rooms.month} {rooms.checkoutdate}</td>
            <td className='font-bold'>{rooms.price}</td>
          </tr>)
      }
     
      
      
    </tbody>
  </table>
</div>
      
    </div>
  )
}

export default MyBooking;
