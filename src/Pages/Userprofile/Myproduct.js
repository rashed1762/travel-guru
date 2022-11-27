import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

import ProductRow from './ProductRow';

const Myproduct = () => {
    const [productbooking,setProductBooking,refetch]=useState([]);
    const [user]=useAuthState(auth);

  
    useEffect(()=>{
        if(user){

        
      fetch(`https://aqueous-gorge-39231.herokuapp.com/productbooking?useremail=${user.email}`)
      .then(res=>res.json())
      .then(data=>setProductBooking(data));
        }
        
  },[user])
  return (
    <div>
        <p>Total Product : <span className='text-secondary font-bold'>{productbooking.length}</span> </p>

        <div className="overflow-x-auto">
  <table className="table w-full">
   
    <thead>
      <tr>
        <th></th>

        
        <th>User Name</th>
        <th>Product</th>
        <th>Product Quantity</th>
        <th>price</th>
        <th>Manage Item</th>
      </tr>
    </thead>
    <tbody>
      {
        productbooking.map(products=>
          
        <ProductRow
        key={products._key}
        products={products}
        refetch={refetch}
        
        ></ProductRow>
        
          )
          
      }
     
      
      
    </tbody>
  </table>
</div>

<p>subtotal:</p>
      
    </div>
  )
}

export default Myproduct;