import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Footer from '../Shared/Footer';
import '../Travelpagecss/morokkocss.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot  } from '@fortawesome/free-solid-svg-icons'
import MorokkoModal from '../BookingModal.js/MorokkoModal';

const Karkow = () => {
  const [morokko,setMorokko]=useState([]);
  const [morokkomodal,setMorokkoModal]=useState(null)



  useEffect(()=>{
    fetch('http://localhost:5000/morokkorooms')
    .then(res=>res.json())
    .then(data=>setMorokko(data));
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
    <div className='morokko'>
      <div className='morokkobanner'>
        <h1 className='text-6xl font-bold  text-white pt-56'>Morokko</h1>
      </div>

      <div  className='text-start mt-28 mr-29 ml-28'>
        <h1 className='text-6xl mb-4'>Dry <span className='font-bold'>Morokko</span></h1>
        <p>Morocco, officially the Kingdom of Morocco, is the westernmost country in the Maghreb region of North Africa. It overlooks the Mediterranean Sea to the north and the Atlantic Ocean to the west, and has land borders with Algeria to the east, and the disputed territory of Western Sahara to the south. Morocco also claims the Spanish exclaves of Ceuta, Melilla and Peñón de Vélez de la Gomera, and several small Spanish-controlled islands off its coast. It spans an area of 446,300 km2  or 710,850 km2  with a population of roughly 37 million. Its official and predominant religion is Islam, and the official languages are Arabic and Berber; the Moroccan dialect of Arabic and French are also widely spoken. Moroccan identity and culture is a vibrant mix of Berber, Arab, and European cultures. Its capital is Rabat, while its largest city is Casablanca.

Inhabited since the Paleolithic Era over 90,000 years ago, the first Moroccan state was established by Idris I in 788. It was subsequently ruled by a series of independent dynasties, reaching its zenith as a regional power in the 11th and 12th centuries, under the Almoravid and Almohad dynasties, when it controlled most of the Iberian Peninsula and the Maghreb.
        </p>
      </div>

      <div>
      <div className='mt-16'>
        
        <Slider {...settings}>
          <div className=''>
            <img className='suizimg' src="https://wallpaperaccess.com/full/3528022.jpg" alt="" />
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
        <div className='grid grid-cols-2 gap-4 mt-12' >
          
        
        {
            morokko.map((morokkovalue)=>{
              <MorokkoModal
              morokkovalue={morokkovalue}
              setMorokkoModal={setMorokkoModal}
              ></MorokkoModal>
              const {img,name,desc,location,price}=morokkovalue;
              return(
                <div>
                  <div className="card roomcrd w-96 bg-base-100 shadow-xl p-5">
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
    <label onClick={()=>setMorokkoModal(morokkovalue)}  htmlFor="booking-modal-6" className="btn">Book Now</label>
    </div>
  </div>
</div>
                </div>
              )

            })
        }
        {morokkomodal && <MorokkoModal morokkomodal={morokkomodal}></MorokkoModal>}
        </div>
      </section>

      <section className='mt-28'>
        <Footer></Footer>
      </section>
    </div>
  )
}

export default Karkow;
