import React from 'react'
import Header from './Header'
import { Arrow } from '../utils/icons'

function Hero() {
    return (
        <div className='relative'>
            <img className='absolute max-lg:hidden top-0 left-0 pointer-events-none max-w-[184px] w-full' src="/assets/images/hero-top-left-img.webp" alt="top left image" />
            <Header />
            <div className='bg-hero-layer bg-cover bg-center bg-no-repeat py-[158px] max-lg:py-24 max-lg:py- px-4'>
                <div className="container flex max-lg:flex-col justify-between max-lg:justify-center gap-5">
                    <div className='max-w-[570px]'>
                        <h1 className='text-custom-6xl max-lg:text-6xl max-md:text-5xl max-sm:text-4xl font-light text-white uppercase leading-[92%] font-sunflower'>We are believers decentralization and Web3. </h1>
                        <p className='text-white mt-[13px] font-space-grotesk'>Vulputate tristique habitant neque, accumsan. Vitae ultrices nulla erat nibh aliquam, quis tempus volutpat arcu. Leo convallis luctus dis malesuada turpis non consequat ac. </p>
                        <div className='flex gap-8 max-lg:gap-5 mt-10 max-md:mt-8 max-lg:mt-5'>
                            <button className='bg-white font-bold py-3 px-6 rounded-[82px] flex items-center gap-1 hover:scale-110 duration-300 ease-linear'>Get Started <Arrow /></button>
                            <button className='text-white py-3 px-8 rounded-[82px] border border-white hover:scale-110 duration-300 ease-linear'>Read More</button>
                        </div>
                    </div>
                    <div>
                        <img className='max-w-[398px] w-full max-lg:mx-auto pointer-events-none' src="/assets/images/hero-image.webp" alt="hero image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero