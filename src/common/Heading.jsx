import React from 'react'

function Heading({ heading }) {
  return (
    <h3 className='font-sunflower text-white text-custom-5xl max-lg:text-5xl max-md:text-4xl max-sm:text-3xl font-light text-center uppercase'>{heading}</h3>
  )
}

export default Heading