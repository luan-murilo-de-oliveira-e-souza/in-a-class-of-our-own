import React from 'react'
import { useState } from 'react'

export default function Auth() {
    const[isLogIn,setIsLogin]=useState(false )
    const viweLogin=(status)=>{
        setIsLogin(status)
  }
  return (
    <div className='auth-container  '>
        <div className='auth-container-box'>
            <form>
            <h2> {  isLogIn ? 'Please Log In' : 'Please Sign Up'}</h2>
          <input 
          type='email'
          placeholder='email'
          onChange={(e)=>setEmail(e.target.value)}
          />
          <input
           type='password'
          placeholder='password'
          onChange={(e)=>setPassword(e.target.value)}
          />
          {!isLogIn && <input
          type='password'
          placeholder='confirm password'
          onChange={(e)=>setConfirmPassword(e.target.value)}
          />}
          <input type='submit' className='create' onClick={(e)=>handleSubmit(e,isLogIn ? 'login':'signup')}/>
        
        </form> 
        <div className='auth-options'>
          <button 
          onClick={()=>{viweLogin(false)}}
          style={{backgroundColor: isLogIn ? 'rgb(255,255,255)':'rgb(188,188,188)'}}
          >Sign Up</button>
          <button
           onClick={()=>viweLogin(true)}
           style={{backgroundColor: !isLogIn ? 'rgb(255,255,255)':'rgb(188,188,188)'}}
           >Login</button>
          </div> 
         </div>
      
    </div>
  )
}
