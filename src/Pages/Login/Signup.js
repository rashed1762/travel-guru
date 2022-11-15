import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile} from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import './login.css'
import auth from '../../firebase.init';
import img1 from '../../assestes/landing-slider-img-1.png'
import img2 from '../../assestes/landing-slider-img-3.png'
import useToken from '../../components/hooks/useToken';
// import useToken from '../../hooks/useToken';

const Signup = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
  
  
    const [
      createUserWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [token]=useToken(user || gUser);
    const navigate=useNavigate();
  
    let signInError;
    
  if (loading || gLoading || updating) {
    return <button className="btn loading">loading</button>
  }
  
  if(error || gError ||updateError){
    signInError= <p className='text-red'><small>{error?.message || gError?.message ||updateError?.message }</small></p>
  }
  
  if(token){
    console.log(user || gUser);
    navigate('/destination');
    
    }
  
  
  
  
  
    const onSubmit = async data => {
      await createUserWithEmailAndPassword(data.email, data.password);
      await updateProfile({ displayName: data.name });
            console.log('update done');
            // navigate('/');
    }
  
      
    return (
      
        <div className='loginback'>
      <div className='flex '>
        <div>
          <img className='img2' src={img2} alt="" />
        </div>

        <div >
        <div className='flex login justify-center  ml-28 mt-10 p-10'>
        <div className="card   w-96 ">
          <form  onSubmit={handleSubmit(onSubmit)} > 
          <h1 className='text-center text-4xl font-bold text-white' > Signup</h1>
  <div className="card-body">
  <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text"><span className='font-bold text-white'>Name</span></span>
  </label>
  <input
  type="name"
  placeholder="Your name"
  className="input input-bordered w-full max-w-xs"
  {...register("name", {
      required: {
          value: true,
          message: 'Name is Required'
      },
   
  })}
  
  
  />
  <label className='label text-error'>
     
     {errors.name?.type === 'required' && <span >{errors.name.message}</span>}</label>
 
</div>
  <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text"><span className='font-bold text-white'>Eamil</span></span>
  </label>
  <input
  
  type="email"
  placeholder="Your Email"
  className="input input-bordered w-full max-w-xs"
  {...register("email", {
      required: {
          value: true,
          message: 'Email is Required'
      },
      pattern: {
          value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
          message: 'Provide a valid Email'
      }
  })}
  
  
  />
  <label className='label text-error'>
     {errors.email?.type === 'required' && <span >{errors.email.message}</span>}
    {errors.email?.type === 'pattern' && <span >{errors.email.message}</span>}</label>
 
</div>
<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text"><span className='font-bold text-white'>Password</span></span>
  </label>
  <input
  type="password"
  placeholder="Enter password" 
  className="input input-bordered w-full max-w-xs"
  {...register("password", {
    required:{
      value:true,
      message:'pasword is required'
    },

    minLength: {
      value: 6,
      message: 'Must be 6 charecter or longer' 
    }

  })} 
  
  
   />
    <label className='label text-error'>
     {errors.password?.type === 'required' && <span >{errors.password.message}</span>}
    {errors.password?.type === 'minLength' && <span >{errors.password.message}</span>}</label>
  
</div>

<div className="flex flex-col w-full border-opacity-50">

</div>
{signInError}
<input className='btn btn-outline btn-success register' type="submit" value="SignUp" />
<small> <p className='mt-3 text-white '>Already Have An Account? <Link to="/login"><span className='text-accent font-bold'>Go To Login</span> </Link></p></small>


  </div>
  
  </form>
  <div className="divider bg-white font-bold">OR</div>
<button onClick={()=>signInWithGoogle()} className="btn btn-outline btn-success">Sign Up With Google</button>
</div>


</div>
        </div>
      </div>
    </div>
  
    )
  }

export default Signup;