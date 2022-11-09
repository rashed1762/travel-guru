import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const BannerSlider = () => {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        // autoplay: true,
        speed: 1000,
    //   autoplaySpeed: 2000,
      cssEase: "linear",
        
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div >
    <h2> Single Item</h2>
    <Slider {...settings}>
      <div className='container-fluid'>
        <img className='img' src="https://i.pinimg.com/736x/e3/30/48/e33048701bff67a2467390969212ba6f.jpg" alt="" />
        <h1 className='info'>dsadsadad</h1>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  </div>
  )
}

export default BannerSlider;
