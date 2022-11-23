import React, { useEffect, useState } from 'react'; 
import '../Travelpagecss/suizerland.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Footer from '../Shared/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faLocationDot} from '@fortawesome/free-solid-svg-icons'
import SuitzerlandModal from '../BookingModal.js/SuitzerlandModal';

const Piran = () => {
  const [suiz,setSuiz]=useState([]);
  const [suizmodal,setSuizModal]=useState(null);


  useEffect(()=>{
    fetch('http://localhost:5000/suitzerlandrooms')
    .then(res=>res.json())
    .then(data=>setSuiz(data));
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
    <div className='suiz'>
      <div className='suizewlandbanner'>
        <h1 className='text-6xl font-bold  text-white pt-56'>Switzerland</h1>
      </div>

      <div  className='text-start mt-28 mr-29 ml-28'>
        <h1 className='text-6xl mb-4'>Stunning <span className='font-bold'>Switzerland</span></h1>
        <p>Switzerland is a mountainous Central European country, home to numerous lakes, villages and the high peaks of the Alps. Its cities contain medieval quarters, with landmarks like capital Bern’s Zytglogge clock tower and Lucerne’s wooden chapel bridge. The country is also known for its ski resorts and hiking trails. Banking and finance are key industries, and Swiss watches and chocolate are world renowned.When we think of Switzerland, our mind goes to skiing resorts, lakes, chocolate, and cheese. The Alp mountains are the perfect setting for swiss people to grow their livestock of cows and produce cheese and chocolate. They also make great skiing tracks and winter destinations.</p>
      </div>

      <div>
      <div>
        <h2>Fade</h2>
        <Slider {...settings}>
          <div className=''>
            <img className='suizimg' src="https://cdn.britannica.com/36/178136-050-7F77D46B/village-Alpine-valley-canton-Saint-Moritz-Engadin.jpg" alt="" />
            </div>
          <div>
            <img className='suizimg' src="https://www.expatica.com/app/uploads/sites/9/2014/05/swiss-lake.jpg" alt="" />
          </div>
          <div>
            <img className='suizimg' src="https://images7.alphacoders.com/983/983225.jpg" alt="" />
          </div>
          <div>
            <img className='suizimg' src="https://images.pexels.com/photos/2779863/pexels-photo-2779863.jpeg?cs=srgb&dl=pexels-nextvoyage-2779863.jpg&fm=jpg" alt="" />
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
            suiz.map((suizvalue)=>{
              <SuitzerlandModal
              suizvalue={suizvalue}
              setSuizModal={setSuizModal}
              ></SuitzerlandModal>
              const {img,name,desc,location,price}=suizvalue;
              return(
                <div>
                  <div className="card roomcrd w-96 m-2 bg-base-100 shadow-xl p-5">
  <figure><img className='switzerlandimg' src={img} alt="Shoes" /></figure>
  <p className='text-error'><FontAwesomeIcon icon={faLocationDot} /> {location}</p>
  <div className="text-start mt-10">
    <h2 className="card-title mb-2">{name}</h2>
    <p>{desc}</p>
    <div className="card-actions mr-10 font-bold justify-end mt-10">
    <p className='text-3xl'>{price}</p>
    <p>per night</p>
    </div>

 



    
    <div className="card-actions justify-center">
    <label onClick={()=>setSuizModal(suizvalue)}  htmlFor="booking-modal-6" className="btn">Book Now</label>
    </div>
  </div>
</div>
                </div>
              )

            })
        }
        {suizmodal && <SuitzerlandModal suizmodal={suizmodal}></SuitzerlandModal>}
        </div>
      </section>

      <section className='mt-28'>
        <Footer></Footer>
      </section>
    </div>
  )
}

export default Piran;
