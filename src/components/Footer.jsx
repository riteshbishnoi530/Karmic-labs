import React from 'react'
import { Facebook, Instagram, Twitter, Youtube, } from '../utils/icons'

function Footer() {
  return (
    <div className='pb-4'>
      <img className='max-w-[255px] max-md:max-w-[200px] w-full mx-auto' src="/assets/images/logo.webp" alt="logo" />
      <div className='flex gap-5 justify-center mt-[69px]'>
        <a target='_blank' className='hover:scale-110 transition-all ease-in-out duration-300' href="https://www.instagram.com/"><Instagram /></a>
        <a target='_blank' className='hover:scale-110 transition-all ease-in-out duration-300' href="https://www.twitter.com/"><Twitter /></a>
        <a target='_blank' className='hover:scale-110 transition-all ease-in-out duration-300' href="https://www.facebook.com/"><Facebook /></a>
        <a target='_blank' className='hover:scale-110 transition-all ease-in-out duration-300' href="https://www.youtube.com/"><Youtube /></a>
      </div>
      <div className='w-full h-[1px] bg-white my-4'></div>
      <p className='text-white opacity-70 text-center'>© Karmic labs {new Date().getFullYear()}</p>
    </div>
  )
}

export default Footer