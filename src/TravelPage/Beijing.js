import React, { useEffect, useState } from 'react'
import '../Travelpagecss/beijingcss.css'
import Slider from 'react-slick';
import Footer from '../Shared/Footer';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faCircleInfo, faCoffee, faContactBook, faHouse, faInfo, faLocationDot, faPlaneArrival, faUser } from '@fortawesome/free-solid-svg-icons'
import BeijingModal from '../BookingModal.js/BeijingModal';

const Beijing = () => {


  const [beijing,setBeijing]=useState([]);
  const [beijingmodal,setBeijingModal]=useState(null)


  useEffect(()=>{
    fetch('http://localhost:5000/beijingrooms')
    .then(res=>res.json())
    .then(data=>setBeijing(data));
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
    <div className='beijing'>
      <div className='beijingbanner'>
        <h1 className='text-6xl font-bold  text-white pt-56'>Beijing</h1>
      </div>

      <div  className='text-start mt-28 mr-29 ml-28'>
        <h1 className='text-6xl mb-4'>Traditional <span className='font-bold'>Beijing</span></h1>
        <p>Beijing , alternatively romanized as Peking is the capital of the People's Republic of China. It is the political center, cultural center, international communication center and scientific and technological innovation center of the country. Beijing is the world's most populous national capital city, with over 21 million residents within an administrative area of 16,410.5 km2  Nevertheless, its built-up area, the third largest in China after Guangzhou and Shanghai, is slightly bigger, including three districts in Hebei  being conurbated but with Miyun and Pinggu Districts in Beijing not agglomerated yet. It is located in Northern China, and is governed as a municipality under the direct administration of the State Council with 16 urban, suburban, and rural districts.Beijing is mostly surrounded by Hebei Province with the exception of neighboring Tianjin to the southeast; together, the three divisions form the Jingjinji megalopolis and the national capital region of China.
        </p>
      </div>

      <div>
      <div className='mt-16'>
        
        <Slider {...settings}>
          <div className=''>
            <img className='suizimg' src="http://www.mandarinzone.com/wp-content/uploads/2015/11/Tianmen.jpg" alt="" />
            </div>
          <div>
            <img className='suizimg' src="https://images.unsplash.com/photo-1584872589930-e99fe5bf4408?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmVpamluZ3xlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
          </div>
          <div>
            <img className='suizimg' src="https://img.freepik.com/premium-photo/beijing-china-forbidden-city_720143-536.jpg?w=2000" alt="" />
          </div>
          <div>
            <img className='suizimg' src="https://i.pinimg.com/originals/43/57/47/4357479e66b795f80e19307a8c58328d.jpg" alt="" />
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
            beijing.map((beijingvalue)=>{
              <BeijingModal 
              beijingvalue={beijingvalue}
              setBeijingModal={setBeijingModal}
              
              ></BeijingModal>
              const {img,name,desc,location,price}=beijingvalue;
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
    <label onClick={()=>setBeijingModal(beijingvalue)}  htmlFor="booking-modal-6" className="btn">Book Now</label>
    </div>
  </div>
</div>
                </div>
              )

            })
        }
        {beijingmodal && <BeijingModal beijingomodal={beijingmodal}></BeijingModal>}
        </div>
      </section>

      <section className='mt-28'>
        <Footer></Footer>
      </section>
    </div>
  )
}

export default Beijing;
