import React from 'react'
import Heading from '../common/Heading'

function Karmic() {
  return (
    <div className='px-4'>
      <div className="max-w-[450px] max-sm:max-w-[300px] mx-auto relative">
        <Heading heading='Who is karmic?' />
        <img
          src="/assets/images/heading-line.webp"
          alt="borders"
          className="max-w-[344px] pointer-events-none max-md:max-w-[280px] absolute -top-1 left-12 max-md:left-20 max-sm:left-6 max-sm:max-w-[250px] max-sm:-top-4 max-lg:-top-6"
        />
      </div>
      <p className='text-center text-white font-space-grotesk mt-2 max-lg:mt-5'>We are builders, innovaters, and believers.</p>
      <p className='text-center text-white max-w-[570px] mx-auto font-space-grotesk leading-[175%]'>We believe in a future that rests in your hands, and yours alone. The future is decentralized, The future is web3.</p>
      <div className='flex justify-center flex-wrap mt-10'>
        <img className='max-w-[369px] w-full pointer-events-none' src="/assets/images/digital-art.webp" alt="digital art" />
        <img className='max-w-[369px] w-full pointer-events-none' src="/assets/images/collections-art.webp" alt="collections art" />
        <img className='max-w-[369px] w-full pointer-events-none' src="/assets/images/art.webp" alt="art" />
      </div>
    </div>
  )
}

export default Karmic