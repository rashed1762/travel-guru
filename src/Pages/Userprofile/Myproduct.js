import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'

const Myproduct = () => {
    const [productbooking,setProductBooking]=useState([]);
    const [user]=useAuthState(auth);
   
  
  
    useEffect(()=>{
        if(user){

        
      fetch(`http://localhost:5000/productbooking?useremail=${user.email}`)
      .then(res=>res.json())
      .then(data=>setProductBooking(data));
        }
  },[user])
  return (
    <div>
        <p>total booking :{productbooking.length}</p>

        <div className="overflow-x-auto">
  <table className="table w-full">
   
    <thead>
      <tr>
        <th></th>

        
        <th>User Name</th>
        <th>Hotel Name</th>
        <th>Check in Date</th>
        <th>Check Out Date</th>
        <th>price</th>
        <th>Manage Item</th>
      </tr>
    </thead>
    <tbody>
      {
        productbooking.map(products=>
            <tr>
            <th> <FontAwesomeIcon icon={faDatabase} /></th>
            <td>{products.username}</td>
            <td className='font-bold'> {products.name} <img className='bookingimg' src={products.img} alt="" /></td>
            <td>{products.month} {products.checkindate}</td>
            <td>{products.month} {products.checkoutdate}</td>
            <td className='font-bold'>{products.price}</td>
          </tr>)
      }
     
      
      
    </tbody>
  </table>
</div>
      
    </div>
  )
}

export default Myproduct;