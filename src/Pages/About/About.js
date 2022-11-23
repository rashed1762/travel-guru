import React from 'react'
import './about.css'
import img1 from '../../assestes/about1.jpg'
import Footer from '../../Shared/Footer'

const About = () => {
  return (
    <div>

      <div className='bannerabout'>
        <h1 className='text-6xl font-bold pt-28'>About Us</h1>
      </div>
      

        <div className='grid grid-cols-2 gap-4'>

          <div className='ml-28 mt-10'>
              <h1 className='text-4xl font-bold'>Contact Or Visit Us</h1>
              <h3 className='text-error'> Been there recently?</h3>
              <p className=''>Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem maecenas nec.</p>
          </div>

          <div>
            <div>
            <h1 className='text-xl font-bold'>Accomodation</h1>
          <div className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{"--value":70}}>70%</div>
            </div>
            <br />
            <div>
            <h1 className='text-xl font-bold'>Destination</h1>
          <div className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{"--value":70}}>70%</div>
            </div>
            <br />
            <div>
            <h1 className='text-xl font-bold'>Meals</h1>
          <div className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{"--value":70}}>70%</div>
            </div>
            <br />
            <div>
            <h1 className='text-xl font-bold'>Transport</h1>
          <div className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{"--value":70}}>70%</div>
            </div>
         
          </div>

          
          
        </div>
        <div className='aboutbanner2'>
    
          </div>
      <div>

      </div>

      <section className='mt-28'>
      <Footer></Footer>
    </section>
    </div>
  )
}

export default About;
