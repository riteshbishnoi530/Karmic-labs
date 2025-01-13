import React from 'react'
import { VALUE_LIST } from '../utils/helper';
import Heading from '../common/Heading';

const Values = () => {
  return (
    <div className="font-space-grotesk container pt-[156px] pb-[100px] max-lg:py-24 max-md:py-16 max-sm:py-10 px-4">
       <div className="max-w-[450px] max-sm:max-w-[300px] mx-auto relative">
                <Heading heading={"Values"}/>
                <img
                    src="/assets/images/heading-line.webp"
                    alt="borders"
                    className="pointer-events-none max-w-[344px] max-md:max-w-[280px] absolute -top-1 left-12 max-md:left-20 max-sm:left-6 max-sm:max-w-[250px] max-sm:-top-4 max-lg:-top-6"
                />
            </div>
      <div className='flex max-xl:flex-wrap gap-4 pt-[77px] max-xl:justify-center'>
        {VALUE_LIST.map((obj, i) => (
          <div key={i} className='group z-20 w-full max-w-[369px] relative'>
            <div className='group-hover:opacity-100 opacity-0 absolute -top-9 -right-9 -z-10 duration-300 ease-linear max-sm:-right-5'></div>
            <div className='p-5 group-hover:backdrop-blur-[16px] group-hover:bg-off-white border-off-white border rounded-xl transition-all duration-300 ease-linear'>
            {obj.icon}
              <h3 className="font-grotesk text-white font-bold text-xl leading-custom-4xl py-2.5">
                {obj.title}
              </h3>
              <p className="text-white font-normal font-grotesk text-base max-w-[329px] leading-6">
                {obj.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Values