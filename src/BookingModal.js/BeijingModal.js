import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';


const BeijingModal = ({beijingomodal}) => {
    const {_id,name,price,img}=beijingomodal;
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
        month:event.target.month.value,
        checkindate:event.target.checkindate.value,
        checkoutdate:event.target.checkoutdate.value,
      
          
      }
      console.log(booking)
      
      fetch('http://localhost:5000/booking', {
              method: 'POST',
              headers: {
                  'content-type': 'application/json'
              },
              body: JSON.stringify(booking)
          })
          .then(res => res.json())
          .then(data => {
              
        
          });
  
          event.target.reset();
      
    }




  return (
    <div>
        
      <input type="checkbox" id="booking-modal-6" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">

  <div className="modal-box">
  <label htmlFor="booking-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="font-bold text-lg">{name}</h3>
    <img src={img} alt="" />
    <p className="py-4"> <span className='font-bold text-xl text-accent'>{price}</span> Per night</p>

    <form onSubmit={handleBooking}  action="">

<div className='flex'>
    <div className="form-control bookingform ">
  <label className="label">
    <span className="label-text">Select Month</span>
    
  </label>
  <select name='month' className="select select-bordered">
    <option disabled selected>Pick one</option>
    <option>January</option>
    <option>Fabruary</option>
    <option>March</option>
    <option>April</option>
    <option>May</option>
    <option>June</option>
    <option>July</option>
    <option>August</option>
    <option>September</option>
    <option>October</option>
    <option>November</option>
    <option>December</option>
    
  </select>
 
</div>

<div className="form-control bookingform ml-10 ">
  <label className="label">
    <span className="label-text">Check in Date</span>
    
  </label>
  <input name='checkindate'  type="number" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
 
</div>

<div className="form-control bookingform ml-8 ">
  <label className="label">
    <span className="label-text">Check Out Date</span>
    
  </label>
  <input name='checkoutdate' type="number" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
 
</div>

    </div>

      <input type="submit" value="submit" className="btn btn-primary" />
</form>
  


    <div className="modal-action">
      {/* <label onClick={handleBooking} htmlFor="booking-modal-6" className="btn">Book Now</label> */}
    </div>
  </div>
</div>
    </div>
  )
}

export default BeijingModal;