
"use client"
import { projects, videos } from "@/app/_constants"
import { useState, useEffect } from "react"
import { projectSlider } from "@/app/_helpers/main"

import Image from "next/image"
import SVG from '@/app/_libs/svg'
import Footer from "@/app/_components/footer"

const Projects = ({}) => {

  const [readMore, setReadMore] = useState('')
  const [slider, setSlider] = useState(projects)
  const [errorImages, setErrorImages] = useState([])

  const checkImageExists = async (url) => {
    try {
      const response = await fetch(url, { method: 'HEAD' });

      if(response.status == 200){
        return true
      }else if ( response.status == 404){
        return false
      }

    } catch (error) {
      console.error("Error checking image existence:", error);
      return false;
    }
  }

  const checkFileType = (name) => {
    const isValidFile = name.endsWith('.mp4') || name.endsWith('.mov');
    return isValidFile
  };
  
  return (
    <>
      <div className="bg-schemefive relative w-full grid grid-cols-12 mt-200 h-full pb-20 ">
        <div className="col-span-2 max-2xl:col-span-1 max-lg:hidden"></div>
        <div className="col-span-8 items-center px-5 max-2xl:col-span-10 max-lg:col-span-12">
          <h1 className="uppercase text-[60px] mt-[200px] mb-[20px] font-[300] text-white dark:text-white px-10 max-md:text-[48px] max-lg:px-3"></h1>
          {slider.length > 0 && slider.map((item, idx) => 
            <div 
              key={idx}
              className="flex flex-col px-10 mb-5 gap-y-5 max-lg:px-3"
            >
              <div className={`` + (idx !== 0 ? ' border-t-[1px] border-schemeone border-opacity-90  ' : '')}></div>
              <div className={`relative w-[100%] `}>
                {item.list[item.count].type === 'image' && 
                  <Image
                    src={`/assets/projects/${item.list[item.count].href}`}
                    width={400}
                    height={400}
                    alt="Picture of project"
                    layout="responsive"
                    quality={85}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL="/assets/blur-placeholder.png"
                  />
                }
                {item.list[item.count].type === 'video' &&
                  <video 
                    className="w-[100%] h-auto max-h-[650px] max-md:h-auto" 
                    controls 
                    preload="none"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    poster={item.thumbnail}
                  >
                    <source src={item.list[item.count].href} type="video/mp4" />
                    <track
                      src={item.list[item.count].href}
                      kind="subtitles"
                      srcLang="en"
                      label="English"
                    />
                    Your browser does not support the video tag.
                  </video>
                }
                {item.list.length > 1 &&
                  <div 
                    className="absolute top-0 bg-black opacity-70 right-0 h-full w-[40px] flex items-center justify-center shadow-2xl hover:cursor-pointer"
                    onClick={() => projectSlider(idx, 1, setSlider)}
                  >
                    <div 
                      className="rounded-full shadow-2xl"
                    >
                      <SVG
                        svg={'arrowRight'}
                        alt="Arrow Right"
                        width={30}
                        height={30}
                        schemeOne={'white'}
                      />
                    </div>
                  </div>
                }
              </div>
              <div className="w-[100%] grid grid-cols-12 my-3 max-lg:w-[80%] max-sm:w-[100%]">
                <div className="flex flex-col justify-start col-span-12  max-sm:col-span-12 max-sm:order-1">
                  <h1 className={`text-[32px]  text-white dark:text-white mt-[10px] py-5 font-[500] `}>{item.title}</h1>
                  <div className="flex flex-col gap-y-2 mb-5">
                    <h1 className="text-[16px] text-white dark:text-white font-[500]">Location: {item.location}</h1>
                    <h1 className="text-[16px] text-white dark:text-white font-[500]">Building Information: {item.building}</h1>
                    <h1 className="text-[16px] text-white dark:text-white font-[500]">Consultants: {item.consultants}</h1>
                    <h1 className="text-[16px] text-white dark:text-white font-[500]">Status: {item.status}</h1>
                  </div>
                  {item.descriptionTitle && <p className="font-[400] text-[18px] text-white mt-3 capitalize dark:text-white">{item.descriptionTitle}</p>}
                  {item.description && <p className="font-[200] text-[16px] my-5 text-white dark:text-white">{item.description}</p>}
                  {item.paragraphTwoTitle && <p className="font-[400] text-[18px] text-white mt-3 capitalize dark:text-white">{item.paragraphTwoTitle}</p>}
                  {item.paragraphTwo && <p className="font-[200] text-[16px] my-5 text-white dark:text-white">{item.paragraphTwo}</p>}
                  {item.paragraphThree && <p className="font-[200] text-[16px] my-5 text-white dark:text-white">{item.paragraphThree}</p>}
                  {item.paragraphFour && <p className="font-[200] text-[16px] my-5 text-white dark:text-white">{item.paragraphFour}</p>}
                  {item.paragraphFive && <p className="font-[200] text-[16px] my-5 text-white dark:text-white">{item.paragraphFive}</p>}
                  {item.paragraphSix && <p className="font-[200] text-[16px] my-5 text-white dark:text-white">{item.paragraphSix}</p>}
                </div>
              </div>
            </div>
          )}

        </div>
        {/* <div className="col-span-2 max-xl:col-span-1 max-lg:hidden"></div> */}
      </div>
      <div 
        className=""
      >
        <Footer/>
      </div>
    </>
  )
}

export default Projects
