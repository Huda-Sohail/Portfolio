import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className="flex items-center">
      {/* Image */}
      <Image src="/portfoliodp.png" alt="Profile picture" width={350} height={350} className="rounded-full" />
      
      {/* Text with additional margin to move it further right */}
      <div className="text-right ml-[400px] flex flex-col">
        <div className="flex">
          <p data-aos="fade-left" className="text-[50px] sm:text-[80px] md:text-[100px] lg:text-[130px] font-bold leading-tight">
            <span className="inline-block align-top">I</span>
            <span>'m</span>
          </p>
        </div>
        <div className="flex">
          <p data-aos="fade-left" className="text-[50px] sm:text-[80px] md:text-[100px] lg:text-[130px] font-bold leading-tight">
            <span className="inline-block align-top">H</span>
            <span>uda</span>
          </p>
        </div>
        <div className="flex">
          <p data-aos="fade-left" className="text-[50px] sm:text-[80px] md:text-[100px] lg:text-[130px] font-bold leading-tight">
            <span className="inline-block align-top">S</span>
            <span>ohail</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero




