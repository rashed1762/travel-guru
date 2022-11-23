import React, { useEffect, useState } from 'react'
import '../Travelpagecss/italycss.css'
import Slider from 'react-slick';
import Footer from '../Shared/Footer';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faCircleInfo, faCoffee, faContactBook, faHouse, faInfo, faLocationDot, faPlaneArrival, faUser } from '@fortawesome/free-solid-svg-icons'
import ItalyModal from '../BookingModal.js/ItalyModal';

const Italy = () => {
  const [italy,setItaly]=useState([]);
  const [italymodal,setItalyModal]=useState(null)


  useEffect(()=>{
    fetch('http://localhost:5000/italyrooms')
    .then(res=>res.json())
    .then(data=>setItaly(data));
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
    <div className='italy'>
      <div className='italybanner'>
        <h1 className='text-6xl font-bold  text-white pt-62'>Italy</h1>
      </div>

      <div  className='text-start mt-28 mr-29 ml-28'>
        <h1 className='text-6xl mb-4'>Amazing <span className='font-bold'>Italy</span></h1>
        <p>Italy , officially the Italian Republic Italian: Repubblica Italiana  is a country located in the middle of the Mediterranean Sea, in Southern Europe; its territory largely coincides with the homonymous geographical region. Italy is also considered part of Western Europe. A unitary parliamentary republic with Rome as its capital and largest city, the country covers a total area of 301,230 km2  and shares land borders with France, Switzerland, Austria, Slovenia and the enclaved microstates of Vatican City and San Marino. Italy has a territorial exclave in Switzerland, Campione. With over 60 million inhabitants, Italy is the third-most populous member state of the European Union.

Due to its central geographic location in Southern Europe and the Mediterranean, Italy has historically been home to myriad peoples and culture, such as the Italic peoples, the Etruscans, the Celts and the Ligures, the Greeks, the Phoenicians, and the Carthaginians
        </p>
      </div>

      <div>
      <div className='mt-16'>
        
        <Slider {...settings}>
          <div className=''>
            <img className='suizimg' src="https://wallpaperaccess.com/full/326599.jpg" alt="" />
            </div>
          <div>
            <img className='suizimg' src="https://www.hdnicewallpapers.com/Walls/Big/Wonders/Colosseum_Famous_Tourist_Place_in_Rome_Italy_4K_Wallpaper.jpg" alt="" />
          </div>
          <div>
            <img className='suizimg' src="https://live.staticflickr.com/5467/17544991692_779dd4d654_b.jpg" alt="" />
          </div>
          <div>
            <img className='suizimg' src="https://www.hdwallpapers.in/download/square_building_church_house_in_italy_rome_4k_5k_hd_travel-HD.jpg" alt="" />
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
            italy.map((italyvalue)=>{
              <ItalyModal
              italyvalue={italyvalue}
              setItalyModal={setItalyModal}
              
              
              ></ItalyModal>
              const {img,name,desc,location,price}=italyvalue;
              return(
                <div>
                  <div className="card roomcrd w-96 m-2 bg-base-100 shadow-xl p-5">
  <figure><img src={img} alt="Shoes" /></figure>
  <p className='text-error'><FontAwesomeIcon icon={faLocationDot} /> {location}</p>
  <div className="text-start mt-10">
    <h2 className="card-title mb-2">{name}</h2>
    <p>{desc}</p>
    <div className="card-actions mr-10 font-bold justify-end mt-10">
    <p className='text-3xl'>{price}</p>
    <p>per night</p>
    </div>

   


    
    <div className="card-actions justify-center">
    <label onClick={()=>setItalyModal(italyvalue)}  htmlFor="booking-modal-6" className="btn">Book Now</label>
    </div>
  </div>
</div>
                </div>
              )

            })
        }
        {italymodal && <ItalyModal italymodal={italymodal}></ItalyModal>}
        </div>
      </section>

      <section className='mt-28'>
        <Footer></Footer>
      </section>
    </div>
  )
}

export default Italy;
