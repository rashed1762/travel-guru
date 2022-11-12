import React, { useEffect, useState } from 'react'
import '../Travelpagecss/balicss.css'
import Footer from '../Shared/Footer';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Bali = () => {
  const [bali,setBali]=useState([]);


  useEffect(()=>{
    fetch('http://localhost:5000/balirooms')
    .then(res=>res.json())
    .then(data=>setBali(data));
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
    <div className='bali'>
      <div className='balibanner'>
        <h1 className='text-6xl font-bold  text-white pt-56'>Bali</h1>
      </div>

      <div  className='text-start mt-28 mr-29 ml-28'>
        <h1 className='text-6xl mb-4'>Beautifull <span className='font-bold'>Bali</span></h1>
        <p>Bali is a province of Indonesia and the westernmost of the Lesser Sunda Islands. East of Java and west of Lombok, the province includes the island of Bali and a few smaller neighbouring islands, notably Nusa Penida, Nusa Lembongan, and Nusa Ceningan.
        ncludes the island of Bali and a few smaller neighbouring islands, notably Nusa Penida, Nusa Lembongan, and Nusa Ceningan. The provincial capital, Denpasar is the most populous city in the Lesser Sunda Islands and the second-largest, after Makassar, in Eastern Indonesia. The upland town of Ubud in Greater Denpasar is considered Bali's cultural centre. The province is Indonesia's main tourist destination, with a significant rise in tourism since the 1980s. Tourism-related business makes up 80% of its economy.
        </p>
      </div>

      <div>
      <div className='mt-16'>
        
        <Slider {...settings}>
          <div className=''>
            <img className='suizimg' src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Pura_Taman_Ayun_terletak_di_Mengwi%2C_Bali.jpg/1200px-Pura_Taman_Ayun_terletak_di_Mengwi%2C_Bali.jpg" alt="" />
            </div>
          <div>
            <img className='suizimg' src="https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20008482-ea4585374abaeca4484baeea6cf47394.jpeg?tr=q-40,c-at_max,w-1280,h-720&_src=imagekit" alt="" />
          </div>
          <div>
            <img className='suizimg' src="https://pixelz.cc/wp-content/uploads/2017/11/desa-pinggan-kintamani-bali-indonesia-uhd-4k-wallpaper.jpg" alt="" />
          </div>
          <div>
            <img className='suizimg' src="https://getwalls.io/wallpapers/335013/2020--08--bali-4k-background-pictures-in-high-quality-pc.jpg" alt="" />
          </div>
        
         
        </Slider>
      </div>
      </div>


      <section>

        <div className='grid grid-cols-2 gap-4' >
          
        
        {
            bali.map((balivalue)=>{
              const {img,name,desc,location,price}=balivalue
              return(
                <div>
                  <div className="card roomcrd w-96 bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <p>{location}</p>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{desc}</p>
    <p>{price}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
                </div>
              )

            })
        }
        </div>
      </section>

      <section className='mt-28'>
        <Footer></Footer>
      </section>
    </div>
  )
}

export default Bali;