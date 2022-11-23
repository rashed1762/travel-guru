import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Productmodal = ({productmodal}) => {

  const {_id,img,name,desc,price,Category}=productmodal;


    const [user] = useAuthState(auth);


    const handleBooking=event=>{
      event.preventDefault();
      const booking={
        valueId:_id,
        name:name,
        img:img,
        price:price,
        useremail:user.email,
        username:user.displayName,
     
      
          
      }
      console.log(booking)
      
      fetch('http://localhost:5000/productbooking', {
              method: 'POST',
              headers: {
                  'content-type': 'application/json'
              },
              body: JSON.stringify(booking)
          })
          .then(res => res.json())
          .then(data => {
              
        
          });
  
        
      
    }



  

  return (
    <div>
      

<input type="checkbox" id="product-modal-5" className="modal-toggle" />
<div className="modal">

  <div className="modal-box w-11/12 max-w-5xl">
  <label htmlFor="product-modal-5" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="font-bold text-lg">{name}</h3>
    <div className='flex text-start'>
   
      <img className='modalimg' src={img} alt="" />
    
    
  
    <div className='ml-5'>
    <p className="py-4">{desc}</p>
    <p> Price: <span className='font-bold'>{price}</span></p>
    <p>Category: <span className='font-bold'>{Category}</span></p>
    <div className="modal-action">
      <label onClick={handleBooking} htmlFor="product-modal-5" className="btn">Add To Cart</label>
    </div>
    </div>
   
    
    </div>
  </div>
</div>

    </div>


            

           



    
  )
}

export default Productmodal;