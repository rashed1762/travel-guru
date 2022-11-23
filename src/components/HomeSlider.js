import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './gallery.css'
import { Link, NavLink } from 'react-router-dom';

const HomeSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 9000,
        autoplaySpeed: 2000,
        
        cssEase: "linear"
      };
  return (
    <div>
        
        <Slider {...settings}>
          <div>
          <div className="card crdstyleslider card-compact w-96 bg-base-100 shadow-xl">
  <figure><img className='crdimg' src="https://media.istockphoto.com/id/491990549/photo/ancient-chinese-architecture.jpg?b=1&s=170667a&w=0&k=20&c=LR2cwWRwKbJqn063PeL0_N2OMVby6nVP_qlHHe8OIts=" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Beijing</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <NavLink to="/beijing" as={Link}> <button className="btn btn-primary">Travel Beizing</button></NavLink>
      
    </div>
  </div>
</div>
          </div>
          <div>
          <div className="card crdstyleslider card-compact w-96 bg-base-100 shadow-xl">
  <figure><img className='crdimg' src="https://wallpaperaccess.com/full/1192101.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Maldivs</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
    <NavLink to="/maldiv" as={Link}> <button className="btn btn-primary">Travel Maldivs</button></NavLink>
    </div>
  </div>
</div>
          </div>
          <div>
          <div className="card crdstyleslider card-compact w-96 bg-base-100 shadow-xl">
  <figure><img className='crdimg' src="https://images5.alphacoders.com/864/864632.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Morokko</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
    <NavLink to="/karkow" as={Link}> <button className="btn btn-primary">Travel Morokko</button></NavLink>
    </div>
  </div>
</div>
          </div>
          <div>
          <div className="card crdstyleslider card-compact w-96 bg-base-100 shadow-xl">
  <figure><img className='crdimg' src="https://img2.goodfon.com/wallpaper/nbig/6/21/sloveniya-piran-gorod-more.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Switzerland</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
    <NavLink to="/piran" as={Link}> <button className="btn btn-primary">Travel Switzerland</button></NavLink>
    </div>
  </div>
</div>
          </div>
          <div>
          <div className="card crdstyleslider card-compact w-96 bg-base-100 shadow-xl">
  <figure><img className='crdimg' src="https://free4kwallpapers.com/uploads/originals/2019/08/25/grand-canal-venice-italy-wallpaper.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Venice ,Italy</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
    <NavLink to="/italy" as={Link}> <button className="btn btn-primary">Travel Italy</button></NavLink>
    </div>
  </div>
</div>
          </div>
          <div>
          <div className="card crdstyleslider card-compact w-96 bg-base-100 shadow-xl">
  <figure><img className='crdimg' src="https://wallpapershome.com/images/wallpapers/ayana-resort-and-spa-3840x2160-bali-jimbaran-best-hotels-tourism-4608.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Bali</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
    <NavLink to="/bali" as={Link}> <button className="btn btn-primary">Travel Bali</button></NavLink>
    </div>
  </div>
</div>

          </div>
          <div>
          <div className="card crdstyleslider card-compact w-96 bg-base-100 shadow-xl">
  <figure><img className='crdimg' src="https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWElMjB0b3VyaXNtfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">India</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
    <NavLink to="/india" as={Link}> <button className="btn btn-primary">Travel India</button></NavLink>
    </div>
  </div>
</div>

          </div>
        </Slider>
      </div>
  )
}

export default HomeSlider;
