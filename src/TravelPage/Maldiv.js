import React, { useEffect, useState } from 'react'
import '../Travelpagecss/maldivcss.css'
import Slider from 'react-slick';
import Footer from '../Shared/Footer';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import MaldivModal from '../BookingModal.js/MaldivModal';

const Maldiv = () => {


  const [maldiv,setMaldiv]=useState([]);
  const [maldivmodal,setMaldivModal]=useState(null)
  


  useEffect(()=>{
    fetch('https://aqueous-gorge-39231.herokuapp.com/maldivrooms')
    .then(res=>res.json())
    .then(data=>setMaldiv(data));
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
    <div className='maldiv'>
      <div className='maldivbanner'>
        <h1 className='text-6xl font-bold  text-white pt-48'>Maldiv</h1>
      </div>

      <div  className='text-start mt-28 mr-29 ml-28'>
        <h1 className='text-6xl mb-4'>Marvelous <span className='font-bold'>Maldiv</span></h1>
        <p>Maldives , officially the Republic of Maldives  Dhivehi Raajjeyge Jumhooriyyaa, Dhivehi pronunciation: , is an archipelagic state located in South Asia, situated in the Indian Ocean. It lies southwest of Sri Lanka and India, about 750 kilometres  from the Asian continent's mainland. The chain of 26 atolls stretches across the Equator from Ihavandhippolhu Atoll in the north to Addu Atoll in the south.

Comprising a territory spanning roughly 90,000 square kilometres  including the sea, land area of all the islands comprises 298 square kilometres  Maldives is one of the world's most geographically dispersed sovereign states and the smallest Asian country as well as one of the smallest Muslim-majority countries by land area and, with around 557,751 inhabitants, the 2nd least populous country in Asia. Malé is the capital and the most populated city, traditionally called the "King's Island" where the ancient royal dynasties ruled for its central location.
The Maldivian Archipelago is located on the Chagos–Laccadive Ridge, a vast submarine mountain range in the Indian Ocean; this also forms a terrestrial ecoregion, together with the Chagos Archipelago and Lakshadweep. With an average ground-level elevation of 1.5 metres  above sea level, and a highest natural point of only 2.4 meters, it is the world's lowest-lying country.
        </p>
      </div>

      <div>
      <div className='mt-16'>
        
        <Slider {...settings}>
          <div className=''>
            <img className='suizimg' src="https://images5.alphacoders.com/361/361643.jpg" alt="" />
            </div>
          <div>
            <img className='suizimg' src="https://www.pixel4k.com/wp-content/uploads/2018/11/maldives-palm-beach-relax-rest-ocean-sand-resort-4k_1541115167.jpg" alt="" />
          </div>
          <div>
            <img className='suizimg' src="https://wallpapercave.com/wp/wp4088774.jpg" alt="" />
          </div>
          <div>
            <img className='suizimg' src="https://www.pixel4k.com/wp-content/uploads/2018/11/maldives-tropical-beach-palm-trees-summer-4k_1541114441.jpg" alt="" />
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
        <div className='grid lg:grid-cols-2  gap-4 lg:gap-0 mt-12' >
          
        
        {
            maldiv.map((maldivvalue)=>{
              <MaldivModal
              maldivvalue={maldivvalue}
              setMaldivModal={setMaldivModal}
              
              ></MaldivModal>
              const {img,name,desc,location,price}=maldivvalue;
              return(
                <div>
                  <div className="card roomcrd w-96 m-2 bg-base-100 shadow-xl p-5">
  <figure><img  src={img} alt="Shoes" /></figure>
  <p className='text-error'><FontAwesomeIcon icon={faLocationDot} /> {location}</p>
  <div className="text-start mt-6">
    <h2 className="card-title mb-2">{name}</h2>
    <p>{desc}</p>
    <div className="card-actions mr-10 font-bold justify-end mt-10">
    <p className='text-3xl'>{price}</p>
    <p>per night</p>
    </div>


  
    
    <div className="card-actions justify-center mt-10">
    <label onClick={()=>setMaldivModal(maldivvalue)}  htmlFor="booking-modal-6" className="btn">Book Now</label>
    </div>
  </div>
</div>
                </div>
              )

            })
        }
        {maldivmodal && <MaldivModal maldivmodal={maldivmodal}></MaldivModal>}
        </div>
      </section>

      <section className='mt-28'>
        <Footer></Footer>
      </section>
    </div>
  )
}

export default Maldiv;
