import React from 'react'
import { UPCOMING_LIST } from '../utils/helper'
import Heading from '../common/Heading'

function UpcomingProjects() {
    return (
        <div id='projects' className='pt-20 pb-[136px] max-lg:py-12 max-md:py-10 max-sm:py-9'>
            <div className="max-w-[570px] mx-auto relative pb-12">
                <Heading heading={"Upcoming Projects "}/>
                <img
                    src="/assets/images/heading-line.webp"
                    alt="borders"
                    className="max-w-[344px] absolute -top-1 left-16 max-lg:-top-7"
                />
            </div>
            <div className="container flex">
                <div className='flex flex-wrap justify-center gap-[29px]'>
                {UPCOMING_LIST.map((obj, i) => (
                    <div className='max-w-[263px] p-4 bg-off-white rounded-xl' key={i}>
                       <img src={obj.image} alt="" />
                       <div className='flex justify-between mt-4'>
                        <p className='text-xl font-medium text-white'>{obj.title}</p>
                        <p className='text-lg text-white font-bold'>{obj.time}</p>
                       </div>
                       <p className='text-lg text-white'>{obj.nft}</p>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}

export default UpcomingProjects