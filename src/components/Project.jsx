import React from 'react'
import Heading from '../common/Heading'
import { PROJECT_LIST } from '../utils/helper'

function Project() {
    return (
        <div className='bg-project-layer bg-no-repeat bg-cover bg-center py-[121px]  px-4'>
            <div className="container">
            <div className="max-w-[450px] max-sm:max-w-[300px] mx-auto relative">
                <Heading heading="Projects" myClass="!text-black" />
                <img
                    src="/assets/images/heading-black-line.webp"
                    alt="borders"
                    className="max-w-[344px] max-md:max-w-[280px] absolute -top-1 left-12 max-md:left-20 max-sm:left-6 max-sm:max-w-[250px] max-sm:-top-4 max-lg:-top-6"
                />
            </div>
            <p className='max-w-[532px] mx-auto text-center text-black mt-2 font-space-grotesk'>Id nam massa sit ut purus tortor est ultrices nunc. Ipsum, nibh egestas vehicula tellus. Molestie adipiscing diam nibh lectus. Magna id nisl quis vestibulum rhoncus.</p>
            <div className="flex justify-center flex-wrap gap-x-4 gap-y-6 mt-[53px]">
            {PROJECT_LIST.map ((obj,i) => (
                <div className='relative group hover:scale-125 hover:z-10 transition-all ease-in-out duration-300 cursor-pointer' key={i}>
                    <img className='max-w-[273px]' src={obj.image} alt="" />
                    <div className='bg-off-gray backdrop-blur-[9px] rounded-b-lg py-3 absolute bottom-0 w-full hidden group-hover:block'>
                    <p className='text-xl font-bold text-center text-white '>{obj.title}</p>
                    </div>
                </div>
            ))}
            </div>
            </div>
            <div className='flex justify-center mt-14 max-lg:mt-12 max-md:mt-10 max-sm:mt-7'>
            <button className='text-black font-medium py-3 px-8 rounded-[82px] border border-black hover:scale-110 duration-300 ease-linear'>View All</button>
            </div>
        </div>
    )
}

export default Project