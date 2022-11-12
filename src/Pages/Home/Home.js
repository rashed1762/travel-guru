import React from 'react'
import './Home.css'
import img1 from '../../assestes/download.png'
import img2 from '../../assestes/tour (2).png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faBuildingColumns, faCalendar, faCar, faCircleInfo, faCoffee, faContactBook, faHouse, faInfo, faPlateWheat, faUser, faUtensilSpoon, faWaveSquare } from '@fortawesome/free-solid-svg-icons'
import Homegallery from '../../components/Homegallery'
import HomeSlider from '../../components/HomeSlider'
import Footer from '../../Shared/Footer'


const Home = () => {
  return (
    <div>
    <div className='banner'>
    <h1 className='text-6xl font-bold text-black pt-48'>Welcome To Travel<span className='text-green-50'>Guru</span> </h1>
    <p className='font-bold text-white'>we believe in customer satisfaction.we are user friendly.we do our work with travellers need and booking easily their places.</p>
    </div>

{/* ..........................
search part
........................... */}
    <div className='banner2'>
      <div className='search'>
      <input type="text" placeholder="WHERE TO" className="input searchinput w-full max-w-xs" />

    <select className="select searchinput  w-full max-w-xs">
    
  <option  selected> MONTH</option>
  <option>January</option>
  <option>Fabruary</option>
  <option>March</option>
  <option>April</option>
  <option>May</option>
  <option>June</option>
  <option>July</option>
  <option>September</option>
  <option>October</option>
  <option>November</option>
  <option>December</option>
  <option>Han Solo</option>
  
</select>
<select className="select searchinput  w-full max-w-xs">
  <option disabled selected>Travel Type</option>
  <option>Beach</option>
  <option>Group Tours</option>
  <option>Best Deals</option>
  <option>Skip Trips</option>
  <option>Tracking</option>
  <option>Camping</option>
</select>
<button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Find Now</button>

    </div>
      </div>
      
{/* //////////////////////////////////amazing tour AND FUN/////////////////////////////////////////////////// */}

    <section className='flex text-start mt-28 '>
      <div className='pl-20 pr-40'>
        <div className='amazing'> 
        <h1 className='text-6xl'> <span className='font-bold'>Amazing </span> Tour and Fun</h1>
          <h1 className='text-6xl'>Adventure <span className='font-bold'>Waiting For You</span></h1>
        </div>
          
          <p className='mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi adipisci quidem voluptatem soluta eaque dignissimos corporis aspernatur maxime, perferendis cum vitae. Pariatur incidunt laudantium fuga excepturi accusantium maxime perspiciatis fugit!</p>
      </div>
      <div className='pr-40'>
      <img className='letsgoimg' src={img2} alt="" />
      </div>
    </section>

    {/* /////////////////////////   explore our servicer   /////////////////////////////////////////////////// */}

    <section className='mt-28'>
      <h1 className='text-5xl'>Explore our Services</h1>
      <p>Far far away, behind the word mountains, far from the countries Vokalia and</p>
      <p>Consonantia, there live the blind texts.</p>
      <FontAwesomeIcon icon={faWaveSquare} />

      <section className='flex mr-10 ml-28 mt-16'>
        <div className='flex'>
          <div><FontAwesomeIcon className='text-6xl text-yellow-600' icon={faBuildingColumns} /></div>
          <div className='text-start ml-8 mr-8'>
                <h1 className='text-3xl mb-2'>1+ Million Hotel Rooms</h1>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          </div>
        </div>
        <div className='flex'>
          <div><FontAwesomeIcon className='text-6xl text-blue-900 ' icon={faPlateWheat} /></div>
          <div className='text-start ml-5 mr-5'>
                <h1 className='text-3xl mb-2'>Food & Drinks</h1>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          </div>
        </div>
        <div className='flex'>
          <div><FontAwesomeIcon className='text-6xl text-cyan-600' icon={faCar} /></div>
          <div className='text-start ml-5 mr-5'>
                <h1 className='text-3xl mb-2'>Airport Taxi</h1>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          </div>
        </div>
      </section>
      
    </section>


    <section>
      <Homegallery></Homegallery>
    </section>


    <section>
    <section className='flex text-start mt-28 '>
      <div className='pl-20 pr-40'>
        <div className='amazing'> 
        <h1 className='text-6xl'>Special <span className='font-bold'>Deal And </span> </h1>
          <h1 className='text-6xl'><span className='font-bold'>Last Minute </span> amazing Offers</h1>
        </div>
          
          <p className='mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi adipisci quidem voluptatem soluta eaque dignissimos corporis aspernatur maxime, perferendis cum vitae. Pariatur incidunt laudantium fuga excepturi accusantium maxime perspiciatis fugit!</p>
      </div>
      
    </section>
    </section>

    <section className='mt-28 mr-16 ml-16'>
      <HomeSlider></HomeSlider>
    </section>

    <section className='mt-28'>
      <Footer></Footer>
    </section>
      
    </div>
  )
}

export default Home;
