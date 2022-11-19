import React, { useEffect, useState } from 'react' 
import { Link, NavLink } from 'react-router-dom';

import './product.css'
import Productmodal from './Productmodal';


const Product = () => {
  const [product,setProduct]=useState([]);
  const [productmodal,setProductModal]=useState(null)




  


  useEffect(()=>{
    fetch('http://localhost:5000/product')
    .then(res=>res.json())
    .then(data=>setProduct(data));
},[])
  return (
    <div >
      <NavLink to="/profile/productbook" as={Link}>
      <button className="btn cart-btn">

<div className="indicator">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
    <span className="badge badge-sm indicator-item">1</span>
  </div>
</button>
      </NavLink>
      

        <div className='bannershop'>
            <h1 className='text-6xl font-bold bannerinfo'>Shop</h1>
        </div>


        <div className='grid grid-cols-3 gap-3 mr-28 ml-28'>
            

            {
                product.map(productvalue=>{
                  <Productmodal
                  productvalue={productvalue}
                  setProductModal={setProductModal}

                  ></Productmodal>
                    const {img,name,desc,price,category}=productvalue;
                    return(
                        <div className="card w-96 mt-6 bg-base-100 shadow-xl">
  <figure><img className='crdimgshop' src={img} alt="Shoes" /></figure>
  <div className=" crdinfo  ">
    <h2 className="text-2xl font-bold  ">{name}</h2>

    <label onClick={()=>setProductModal(productvalue)} className="btn viewbtn ml-64 btn-sm " htmlFor="product-modal-5" >Quick View</label>
    

  
  </div>
</div>
                    )
                })
            }
            {productmodal && <Productmodal productmodal={productmodal}></Productmodal>}
        </div>
        


    </div>
  )
}

export default Product;