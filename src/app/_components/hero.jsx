'use client'
// import Button from './button'
// import ButtonTwo from './buttonTwo'
import Image from 'next/image'
import SVG from '../_libs/svg'
import { useParallax } from 'react-scroll-parallax'
import { useWindowSize } from '@react-hook/window-size'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react'

const Hero = () => {

  const router                                = useRouter()
  const [width, height]                       = useWindowSize()
  const [windowWidth, setWindowWidth]         = useState()
  const { ref: parallaxOne }                  = useParallax(  windowWidth < 765 ?  { speed: 20 } : { speed: 50 });

  useEffect(() => {
    setWindowWidth(window.innerWidth)
  }, [])

  useEffect(() => {
    setWindowWidth(width)
  }, [width])
  
  return (
    <section
      className='w-full flex flex-col h-[1200px] md:gap-10 md:max-container md:mb-5 md:px-[6rem] min-[2000px]:h-[1200px] min-[2800px]:h-[1600px]'
    >
      {/* <video
        className='absolute inset-0 w-full h-[1200px] object-cover max-md:hidden'
        autoPlay
        loop
        muted
      >
      <source src="/assets/homeone.mp4" type="video/mp4" />
      </video> */}
      <Image
        ref={parallaxOne}
        src="/assets/homeone.2.png"
        width={1900}
        height={1200}
        alt="Picture of the author"
        className="absolute z-10 inset-0 -top-[0px] w-full h-[1000px] text-center bg-cover object-cover max-lg:h-[1000px] max-sm:h-[600px] max-sm:top-[180px] min-[2000px]:h-[1200px] min-[2800px]:h-[1600px] min-[2800px]:-top-[60px] min-[2000px]:-top-[60px]"
      />
      <div className="relative -z-1">
        {/* <div className="fixed top-[80px] right-[150px] flex flex-col items-center justify-center py-3 max-sm:top-[80px] max-sm:left-[100px]">
          <Image
            src="/assets/logo.png"
            width={250}
            height={250}
            alt="Picture of the author"
            className="w-full h-[100px] p-0 text-center max-lg:w-[100%] max-md:h-[100px] max-sm:h-[70px]  max-[640px]:w-[80%] max-[550px]:w-[100%]"
          />
        </div> */}
        <div
          className="max-md:hidden"
        >
          {/* <div className="text-[18px] font-[500] py-5 px-2 text-schemesix capitalize">serving Los Angeles, CA</div> */}
          {/* <span
            onClick={() => bookNowEvent()}
          >
            <ButtonTwo
              label='Book now'
              backgroundColor={''}
              svgColor={'white'}
              width={280}
              height={50}
              font={600}
              fullWidth={false}
              textColor={'#FFFFFF'}
              borderColor={'#81C030'}
              svg={'arrowRight'}
              href={'/book-now'}
              borderRadius={true}
              loading={''}
              loadingType={'test'}
            />
          </span> */}
        </div>
        {/* <div
          className="hidden max-md:block"
        >
          <div className="text-[18px] font-[500] py-5 px-2 text-schemesix capitalize">serving Los Angeles, CA</div>
          <span
            onClick={() => bookNowEvent()}
          >
            <ButtonTwo
              label='Book now'
              backgroundColor={''}
              svgColor={'white'}
              width={280}
              height={50}
              font={600}
              fullWidth={false}
              textColor={'#FFFFFF'}
              borderColor={'#81C030'}
              svg={'arrowRight'}
              href={'/book-now'}
              borderRadius={true}
              loading={''}
              loadingType={'test'}
            />
          </span>
        </div> */}
        <br />
      </div>
    </section>
  );
};

export default Hero;
