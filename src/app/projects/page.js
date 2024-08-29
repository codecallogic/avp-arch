
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
          <h1 className="uppercase text-[60px] mt-[200px] font-[300] text-white dark:text-white px-10 max-md:text-[48px] max-lg:px-3">Projects</h1>
          { slider.length > 0 && slider.map((item, idx) => 
            <div 
              key={idx}
              className="flex flex-col px-10 gap-y-5 max-lg:px-3"
            >
              <h1 className={`text-[32px] text-white dark:text-white mt-[80px] py-5 font-[500] ` + (idx !== 0 ? ' border-t-[1px] border-schemeone border-opacity-90  ' : '')}>{item.title}</h1>
              <div className="relative w-[100%]">
                {item.list[item.count].type == 'image' && 
                  <Image
                    src={`/assets/projects/${item.list[item.count].href}`}
                    width={400}
                    height={400}
                    alt="Picture of project"
                    layout="responsive"
                    quality={100}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="text-center bg-cover object-cover shadow-lg mt-1 mb-3 min-[2800px]:h-[700px] max-lg:w-[100%] max-sm:w-[100%]"
                  /> 
                }
                {item.list[item.count].type == 'video' &&
                  <video 
                    className="w-[100%] h-[650px]" 
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
                {/* <div 
                  className="absolute top-[50%] left-5 bg-black rounded-full hover:cursor-pointer"
                  onClick={() => projectSlider(idx, -1, setSlider)}
                >
                  <SVG
                    svg={'arrowLeft'}
                    alt="Arrow Left"
                    width={50}
                    height={50}
                    schemeOne={'#ffffff'}
                  />
                </div> */}
                {item.list.length > 1 &&
                  <div 
                    className="absolute top-[50%] right-5 bg-schemefour rounded-full shadow-2xl hover:cursor-pointer"
                    onClick={() => projectSlider(idx, 1, setSlider)}
                  >
                    <SVG
                      svg={'arrowRight'}
                      alt="Arrow Right"
                      width={50}
                      height={50}
                      schemeOne={'#ffffff'}
                    />
                  </div>
                }
              </div>
              <div className="w-[100%] grid grid-cols-12 my-3 max-lg:w-[80%] max-sm:w-[100%]">
                <div className="flex flex-col justify-start col-span-12 px-8 max-sm:col-span-12 max-sm:order-1 ">
                  <div className="flex flex-col gap-y-2 mb-5 px-3">
                    <h1 className="text-[18px] text-white dark:text-white font-[500]">Location: {item.location}</h1>
                    <h1 className="text-[18px] text-white dark:text-white font-[500]">Building Information: {item.building}</h1>
                    <h1 className="text-[18px] text-white dark:text-white font-[500]">Consultants: {item.consultants}</h1>
                    <h1 className="text-[18px] text-white dark:text-white font-[500]">Status: {item.status}</h1>
                  </div>
                  {item.description && <p className="font-[200] text-[16px] my-5 text-white dark:text-white">{item.description}</p>}
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
