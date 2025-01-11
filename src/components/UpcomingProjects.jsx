import React from 'react'
import { UPCOMING_LIST } from '../utils/helper'
import Heading from '../common/Heading'

function UpcomingProjects() {
    return (
        <div id='projects' className='pt-20 pb-[136px] max-lg:pb-24 max-md:pt-12'>
            <div className="max-w-[540px] max-sm:max-w-[300px] mx-auto relative pb-12">
                <Heading heading={"Upcoming Projects "} />
                <img
                    src="/assets/images/heading-line.webp"
                    alt="borders"
                    className="max-w-[344px] max-md:max-w-[290px] absolute -top-1 left-32 max-lg:left-28 max-md:left-36 max-sm:left-6 max-sm:max-w-[250px] max-sm:-top-4 max-lg:-top-6"
                />
            </div>
            <div className="container flex">
                <div className='flex flex-wrap justify-center gap-[29px]'>
                    {UPCOMING_LIST.map((obj, i) => (
                        <div className='max-w-[263px] p-4 bg-off-white backdrop-filter backdrop-blur-[30px] rounded-xl' key={i}>
                            <img src={obj.image} alt="" />
                            <div className='flex justify-between mt-4'>
                                <p className='text-xl font-medium text-white'>{obj.title}</p>
                                <p className='text-lg text-white font-bold'>{obj.time}</p>
                            </div>
                            <p className='text-lg text-white font-space-grotesk'>{obj.nft}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex justify-center'>
                <button className='text-white py-3 px-8 rounded-[82px] border border-white hover:scale-110 duration-300 ease-linear mt-12'>View All</button>
            </div>
        </div>
    )
}

export default UpcomingProjects