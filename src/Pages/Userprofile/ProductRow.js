import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'

const ProductRow = ({products}) => {
    const {_id,Loading}=products;
    const [user]=useAuthState(auth);


    

const handleDelete=id=>{
    const url=`https://aqueous-gorge-39231.herokuapp.com/productbooking/${id}?useremail=${user.email}`;
    fetch(url,{
        method:"DELETE",
        headers:{
            authorization:`Bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        if(Loading){
            return <button className="btn loading">loading</button>
        }
    })
}


  return (
    <tr>
    <th> <FontAwesomeIcon icon={faDatabase} /></th>
    <td>{products.username}</td>
    <td className='font-bold'> {products.name} <img className='bookingimg' src={products.img} alt="" /></td>
    <td>
    <div className="btn-group ">
<button  className="btn btn-outline ">-</button>
<button className="btn btn-outline">{1}</button>
<button  className="btn btn-outline">+</button>
</div>
    </td>
    <td className='font-bold'>{products.price}</td>
    <td className='font-bold'><button onClick={()=>handleDelete(_id).window.location.reload() } className="btn btn-sm">Remove</button></td>
        
  </tr>

  
  )
}

export default ProductRow;