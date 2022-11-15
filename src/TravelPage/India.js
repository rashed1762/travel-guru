import React, { useEffect, useState } from 'react'
import '../Travelpagecss/indiacss.css'
import Slider from 'react-slick';
import Footer from '../Shared/Footer';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faCircleInfo, faCoffee, faContactBook, faHouse, faInfo, faLocationDot, faPlaneArrival, faUser } from '@fortawesome/free-solid-svg-icons'
import IndiaModal from '../BookingModal.js/IndiaModal';

const India = () => {

  const [india,setIndia]=useState([]);
  const [indiamodal,setIndiaModal]=useState(null)


  useEffect(()=>{
    fetch('http://localhost:5000/indiarooms')
    .then(res=>res.json())
    .then(data=>setIndia(data));
},[])
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className='india'>
      <div className='indiabanner'>
        <h1 className='text-6xl font-bold  text-white '>India</h1>
      </div>

      <div  className='text-start mt-28 mr-29 ml-28'>
        <h1 className='text-6xl mb-4'>MultiNature <span className='font-bold'>India</span></h1>
        <p>India, officially the Republic of India  is a country in South Asia. It is the seventh-largest country by area, the second-most populous country, and the most populous democracy in the world. Bounded by the Indian Ocean on the south, the Arabian Sea on the southwest, and the Bay of Bengal on the southeast, it shares land borders with Pakistan to the west; China, Nepal, and Bhutan to the north; and Bangladesh and Myanmar to the east. In the Indian Ocean, India is in the vicinity of Sri Lanka and the Maldives; its Andaman and Nicobar Islands share a maritime border with Thailand, Myanmar, and Indonesia. The nation's capital city is New Delhi.

Modern humans arrived on the Indian subcontinent from Africa no later than 55,000 years ago. Their long occupation, initially in varying forms of isolation as hunter-gatherers, has made the region highly diverse, second only to Africa in human genetic diversity. Settled life emerged on the subcontinent in the western margins of the Indus river basin 9,000 years ago, evolving gradually into the Indus Valley Civilisation of the third millennium BCE.By 1200 BCE, an archaic form of Sanskrit, an Indo-European language, had diffused into India from the northwest
        </p>
      </div>

      <div>
      <div className='mt-16'>
        
        <Slider {...settings}>
          <div className=''>
            <img className='suizimg' src="https://wallpaperaccess.com/full/4136706.jpg" alt="" />
            </div>
          <div>
            <img className='suizimg' src="https://wallpaperaccess.com/full/4268745.jpg" alt="" />
          </div>
          <div>
            <img className='suizimg' src="https://wallpapercrafter.com/desktop/240447-indium-rajasthan-monument-and-historic-place-hd.jpg" alt="" />
          </div>
          <div>
            <img className='suizimg' src="https://assets.cntraveller.in/photos/60ba24b10f3a5367ec9fe90f/master/pass/meghalaya-tourism-reopens-1366x768.jpg" alt="" />
          </div>
        
         
        </Slider>
      </div>
      </div>

      <section className='mt-28'>
        <div>
          <h1 className='text-6xl'>
            our room collections
          </h1>
          <p className='text-xl'>We have super exclusive room with cheap price.we want to ensure a safe and happy journey and enjoy your travel</p>
        </div>
        <div className='grid grid-cols-2 gap-4 mt-12' >
          
        
        {
            india.map((indiavalue)=>{
              <IndiaModal>
                   balivalue={indiavalue}
              setIndiaModal={setIndiaModal}

              </IndiaModal>
              const {img,name,desc,location,price}=indiavalue;
              return(
                <div>
                  <div className="card roomcrd w-96 bg-base-100 shadow-xl p-5">
  <figure><img src={img} alt="Shoes" /></figure>
  <p className='text-error'><FontAwesomeIcon icon={faLocationDot} /> {location}</p>
  <div className=" text-start mt-10">
    <h2 className="card-title mb-2">{name}</h2>
    <p>{desc}</p>
    <div className="card-actions mr-10 font-bold justify-end mt-10">
    <p className='text-3xl'>{price}</p>
    <p>per night</p>
    </div>
    
    <div className="card-actions justify-center">
    <label onClick={()=>setIndiaModal(indiavalue)}  htmlFor="booking-modal-6" className="btn">Book Now</label>
    </div>
  </div>
</div>
                </div>
              )

            })
        }
        {indiamodal && <IndiaModal indiamodal={indiamodal}></IndiaModal>}
        </div>
      </section>

      <section className='mt-28'>
        <Footer></Footer>
      </section>
    </div>
  )
}

export default India;
