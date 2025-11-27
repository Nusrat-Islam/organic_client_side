 "use client"

import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext';
import Link from 'next/link';


 
export default function page() {
 const {logIn}= useContext(AuthContext)  
  
    const handleLogin = (e) =>  {

     e.preventDefault();
   
     const name= e.target.name.value;
     const email= e.target.email.value;
     const photo= e.target.photo.value;
     const password= e.target.password.value;
     console.log(name,email,photo,password)
     
     logIn()
       .then((res) => {
   
    const user = res.user;
    toast.success(user)
    
  })
  .catch((error) => {
 
    const errorMessage = error.message;
    toast.error(errorMessage)
  });

    }
  return (
       <div>
            <div className="hero bg-amber-300 min-h-screen">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-5xl font-bold">Login now!</h1>
      
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
       <form onSubmit={handleLogin}>
         <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" name='email' placeholder="Email" required />
          <label className="label">Password</label>
          <input type="password" className="input" name='password'placeholder="Password" required/>
          <div><a className="link link-hover">Forgot password?</a></div>
           <button className="btn border-amber-200 mt-4">Continue with Google</button>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
       </form>
        <div>
            <li className='font-semibold'> Don't have an account?<Link href={'/register'} className="text-blue-600">Register</Link></li>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
  )
}


