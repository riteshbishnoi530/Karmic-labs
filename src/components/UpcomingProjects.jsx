import React from 'react'
import { UPCOMING_LIST } from '../utils/helper'

function UpcomingProjects() {
    return (
        <div>
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