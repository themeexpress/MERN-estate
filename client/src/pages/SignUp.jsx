import React from 'react'
import { Link } from 'react-router-dom'

export default function SignOut() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>SignUp</h1>
      <form action='' className='flex flex-col gap-4'>
        <input type='text' placeholder='user Name'
        className='border p-3 rounded-lg' id='username' />
        <input type='text' placeholder='Email'
        className='border p-3 rounded-lg' id='email' />
        <input type='text' placeholder='Password'
        className='border p-3 rounded-lg' id='password' />
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95
        disable:opacity-80'>Sign Up</button>

        <div className='flex gap-2 mt-5'>
          <p>Have an account? </p>
          <Link to={"/sign-in"}>
            <span className='text-blue-700'> Sign In </span>
          </Link>
        </div>
      </form>
    </div>
  )
}
