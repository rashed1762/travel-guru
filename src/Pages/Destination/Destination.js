import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import Footer from '../../Shared/Footer';
import './destination.css'

const Destination = () => {
  return (
    <div>

        <div className='desbanner'>
                <h1 className='text-6xl font-bold text-white'>Destination</h1>
        </div>


        <div>
        <section className='flex text-start mt-28 '>
      <div className='pl-20 pr-40'>
        <div className='amazing'> 
        <h1 className='text-6xl'>Choose Your <span className='font-bold'>Destination </span> </h1>
          <h1 className='text-6xl'>Your <span className='font-bold'>Dream </span> near at you <span></span></h1>
        </div>
          
          <p className='mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi adipisci quidem voluptatem soluta eaque dignissimos corporis aspernatur maxime, perferendis cum vitae. Pariatur incidunt laudantium fuga excepturi accusantium maxime perspiciatis fugit!</p>
      </div>
      
    </section>
        </div>

    
    <div className=' grid mt-28 ml-24 mr-10 grid lg:grid-cols-3  gap-4 lg:gap-0 mt-12 '>
      <div>
        <NavLink to="/beijing" as={Link}>


        <div className="card destinationcrd w-96 bg-base-100 shadow-xl">
  <div className="card-body">
   <h1 className='text-6xl font-bold countryname text-white'>Beijing</h1>
  </div>
</div>

        </NavLink>
      
      </div>
      <div>
        <NavLink to="/maldiv" as={Link}>


        <div className="card destinationcrd2 w-96 bg-base-100 shadow-xl">
  <div className="card-body">
   <h1 className='text-6xl font-bold countryname  text-white'>Maldiv</h1>
  </div>
</div>

        </NavLink>
      
      </div>


     <div>
        <NavLink to="/india" as={Link}>


        <div className="card destinationcrd3 w-96 bg-base-100 shadow-xl">
  <div className="card-body">
   <h1 className='text-6xl font-bold countryname  text-white'>India</h1>
  </div>
</div>

        </NavLink>
      
      </div>


      <div>
        <NavLink to="/bali" as={Link}>


        <div className="card destinationcrd4 w-96 bg-base-100 shadow-xl">
  <div className="card-body">
   <h1 className='text-6xl font-bold countryname  text-white'>Bali</h1>
  </div>
</div>

        </NavLink>
      
      </div>


     <div>
        <NavLink to="/piran" as={Link}>


        <div className="card destinationcrd5 w-96 bg-base-100 shadow-xl">
  <div className="card-body">
   <h1 className='text-6xl font-bold countryname  text-white'>Switzerland</h1>
  </div>
</div>

        </NavLink>
      
      </div>


      <div>
        <NavLink to="/karkow" as={Link}>


        <div className="card destinationcrd6 w-96 bg-base-100 shadow-xl">
  <div className="card-body">
   <h1 className='text-6xl font-bold countryname text-white'>Morokko</h1>
  </div>
</div>

        </NavLink>
      
      </div>


      <div>
      <div>
        <NavLink to="/italy" as={Link}>


        <div className="card destinationcrd7 w-96 bg-base-100 shadow-xl">
  <div className="card-body">
   <h1 className='text-6xl font-bold countryname  text-white'>Italy</h1>
  </div>
</div>

        </NavLink>
      
      </div>
      </div>
  
  
      

    </div>

    <section className='mt-28'>
        <Footer></Footer>
    </section>
    </div>
  )
}

export default Destination;
