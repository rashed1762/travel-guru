import React, { useState } from 'react'
import gallery from './HomeGallerydata';
import './gallery.css'
import img1 from '../assestes/g1.jpg'
import img2 from '../assestes/g2.jpg'
import img3 from '../assestes/g3.jpg'
import img4 from '../assestes/g4.jpg'
import img5 from '../assestes/g5.webp'
import img6 from '../assestes/g6.jpg'
import img7 from '../assestes/g7.jpg'
import img8 from '../assestes/g8.webp'
import img9 from '../assestes/g9.png'
import img10 from '../assestes/g10.avif'
import img11 from '../assestes/g11.jpg'
import img12 from '../assestes/g12.jpeg'
import img14 from '../assestes/g14.jpg'

const Homegallery = () => {
    
  return (
    <div>
      <div className='gallery  mt-28'>
     <img src={img1} alt="" />
     <img src={img2} alt="" />
     <img src={img3} alt="" />
     <img src={img4} alt="" />
     <img src={img5} alt="" />
     <img src={img6} alt="" />
     <img src={img7} alt="" />
     <img src={img8} alt="" />
     <img src={img9} alt="" />
     <img src={img10} alt="" />
     <img src={img11} alt="" />
     <img src={img12} alt="" />
     <img src={img14} alt="" />
     
      </div>
    </div>
  )
}

export default Homegallery;
