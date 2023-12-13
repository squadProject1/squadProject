import React, { useState } from 'react'
import Register from './Register'
const Login = () => {
  const[register,setRegister]=useState(false)
    return (
      <div className=' w-full min-h-screen'>
  {!register?<div>
  <div style={{'height': '422px'}} className=' border-2 border-gray-400 bg-white absolute w-96 h-3/4 top-16 right-72 text-black flex justify-center items-center gap-3'   >
      <div className='w-full ml-7'>
         <img className=' w-44 -mt-20 cursor-pointer' style={{'margin-top': '1px',
      'height': '107px',
      'margin-left': '53px'}} src="https://i0.wp.com/www.dafontfree.io/wp-content/uploads/2020/12/instagram-new.png?resize=1100%2C750&ssl=1" alt="" />
      <input type="email"
      required
      placeholder='Phone number,Email or Username'
      className='w-3/4 h-11 p-4 bg-button-bg text-xs'
       /><br/>
       <input type="password"
       required 
       placeholder='Password'
       className='w-3/4 h-11 p-4 bg-button-bg text-xs mt-2 '/><br/>
       <button className='bg-button text-white w-52 h-9 mt-5 ml-11 rounded cursor-default'>Connect</button>
      <div className='mt-5'>
      <hr className='text-gray-400 w-1/3' /><h4 className='absolute left-40 text-gray-400 top-65' style={{
      top: '68%'}}>Or</h4>
      <span><hr className='text-gray-400 w-1/3 ml-40'/></span>
      </div>
      <div className='ml-7 grid ' style={{'grid-template-columns':'10% 90%','margin-top': '22px'}}>
     <img className='w-4 mt-4' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Logo_de_Facebook.png/1200px-Logo_de_Facebook.png" alt="" />
    <h1 className='cursor-pointer text-blue' 
    style={{'margin-top': '11px',
      'text-wrap': 'nowrap',
      'margin-right': '144px'}}>Connect With Facebook</h1> 
      </div>
     
       <h4 className='cursor-pointer text-center mt-6 -ml-16 text-xs'>Forget Password?</h4>
       </div>
       </div>
       <div className=' w-36 absolute ' style={{    'top': '76%','right': '30%'}}>
       <h3 className=' ml-3'>Download the app</h3>
       <div className='flex gap-3 mt-4'>
          <img className=' w-36 h-10 cursor-pointer' src="https://static.cdninstagram.com/rsrc.php/v3/yr/r/093c-DX36-y.png" alt="" />
          <img className=' w-36 h-10 cursor-pointer' src="https://static.cdninstagram.com/rsrc.php/v3/yk/r/NtqqucWkedn.png" alt="" />
       </div>
      </div>
       <div className='bg-white absolute -mt-16 right-72 top-3/4 w-96 h-12 flex justify-center align-center items-center border-2 border-gray' >
          <h3>Don't have an account?<span onClick={()=> setRegister(true)} className=' cursor-pointer text-blue'>Register</span></h3>
       </div>
       </div>:<Register register={register} setRegister={setRegister}/>}
       
      <div>
      <img src="https://www.instagram.com/images/instagram/xig/homepage/screenshots/screenshot4.png?__d=www" alt="" />
  <img src="https://www.instagram.com/images/instagram/xig/homepage/screenshots/screenshot2.png?__d=www" alt="" />
      </div>
      <div className='flex gap-4 text-gray-dark text-xs absolute bottom-10 left-28 cursor-pointer '>
          <h4>Meta</h4>
          <h4>À propos</h4>
          <h4>Blog</h4>
          <h4>Emplois</h4>
          <h4>Aide</h4>
          <h4>API</h4>
          <h4>Confidentialité</h4>
          <h4>Conditions</h4>
          <h4>Lieux</h4>
          <h4>Instagram Lite</h4>
          <h4>Threads</h4>
          <h4>Importation des contacts et non-utilisateurs</h4>
          <h4>Meta Verified</h4>
      </div>
      <h3 className='text-gray-dark text-xs absolute bottom-0 left-1/2'>© 2023 Instagram par Meta</h3>
      </div>
    )
  }
  
  export default Login