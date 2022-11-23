import React, { useRef } from 'react' 
import './contact.css'
import emailjs from '@emailjs/browser';
import img1 from '../../assestes/landing-slider-img-1 (1).png'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_e0upac7', 'template_3v6hllz', form.current, 'oYs0fZ-tmSmHuYr2P')
      .then((result) => {
          console.log(result.text);
          console.log("massage sent")
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <div >
      <div className='bannercontact'>
            <h1 className='text-6xl font-bold text-white'>Contact</h1>
        </div>


        <div className='grid grid-cols-2 gap-4'>
          <div >
          
            <form ref={form} onSubmit={sendEmail} className='form' action="">
              <h1 className='text-2xl font-bold'>  Contact With Us</h1>
            <div className="form-control ml-8 ">
  <label className="label">
    <span className="label-text">Name</span>
  </label>
  <input type="text" name="user_name" placeholder="Type here" className="input input-bordered w-96 " />
 
</div>
<div className="form-control w-full ml-8 ">
  <label className="label">
    <span className="label-text">Email</span>
  </label>
  <input type="text" name="user_email" placeholder="Type here" className="input input-bordered w-96 " />
 
</div>
<div className="form-control ml-8 ">
  <label className="label">
    <span className="label-text">Subject</span>
  </label>
  <input type="text" name="subject" placeholder="Type here" className="input input-bordered w-96" />
 
</div>
<br />

<textarea name="message" className="textarea message textarea-primary w-96 " placeholder="Bio"></textarea>
<br />
<button type="submit" className="btn btn-outline btn-primary">send</button>

            </form>
          </div>
          <div className='imgpart'>
            <img   src={img1} alt="" />
           
          </div>
            
        </div>

        <section></section>
    </div>
  )
}

export default Contact;
