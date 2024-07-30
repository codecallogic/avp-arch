
"use client"
import Image from "next/image"
import { projects, videos } from "@/app/_constants"
import { useState, useEffect } from "react"
import ReactPlayer from "react-player";

import Footer from "@/app/_components/footer"

const Projects = ({}) => {

  const [readMore, setReadMore] = useState('')
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
          <h1 className="uppercase text-[60px] mt-[200px] font-[300] text-white dark:text-white px-10 mb-10 max-md:text-[48px] max-lg:px-3">Projects</h1>
          { projects.length > 0 && projects.map((item, idx) => 
            <div 
              key={idx}
              className="flex flex-col px-10 gap-y-5 max-lg:px-3"
            >
              <h1 className={`text-[32px] text-white dark:text-white mt-[80px] py-5 font-[300] ` + (idx !== 0 ? ' border-t-[1px] border-schemeone border-opacity-90  ' : '')}>{item.title}</h1>
              <Image
                src={`/assets/projects/${item.image}`}
                width={2000}
                height={2000}
                alt="Picture of project"
                layout="responsive"
                quality={100}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="w-[100%] h-[550px] text-center bg-cover object-cover shadow-lg mt-1 mb-3 min-[2800px]:h-[700px] max-lg:w-[100%] max-sm:w-[100%]"
              /> 
              <div className="w-[100%] grid grid-cols-12 my-3 max-lg:w-[80%] max-sm:w-[100%]">
                <div className="col-span-6 max-sm:col-span-12 max-sm:my-3 max-sm:order-2">
                  <div className="w-full grid grid-cols-8 animate-fade-in gap-x-2 ">
                    <div className="w-full col-span-8 shadow-sm rounded-md ">
                    {item.video &&
                      <video className="w-[550px] h-[250px]" controls preload="none">
                        <source src={item.video} type="video/mp4" />
                        <track
                          src={item.video}
                          kind="subtitles"
                          srcLang="en"
                          label="English"
                        />
                        Your browser does not support the video tag.
                      </video>
                    }
                    </div>
                    <div className="col-span-8 shadow-sm rounded-md">
                      {item.imageTwo &&
                        <Image
                          src={`/assets/projects/${item.imageTwo}`}
                          width={800}
                          height={800}
                          alt="Picture of project"
                          layout="responsive"
                          quality={100}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="w-[100%] h-[250px] text-center bg-cover object-cover shadow-lg my-2"
                          onError={() => setErrorImages([...errorImages, `/assets/projects/${item.image.replace('.jpeg', '')}.1.jpeg`])}
                        />
                      }
                    </div>
                    <div className="col-span-4 shadow-sm rounded-md">
                      {item.imageThree &&
                      <Image
                        src={`/assets/projects/${item.imageThree}`}
                        width={800}
                        height={800}
                        alt="Picture of project"
                        layout="responsive"
                        quality={100}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="w-[100%] h-[250px] text-center bg-cover object-cover shadow-lg my-2"
                        onError={() => setErrorImages([...errorImages, `/assets/projects/${item.image.replace('.jpeg', '')}.2.jpeg`])}
                      />
                      }
                    </div>
                    <div className="col-span-4 shadow-sm rounded-md">
                      {item.imageFour && 
                        <Image
                          src={`/assets/projects/${item.imageFour}`}
                          width={800}
                          height={800}
                          alt="Picture of project"
                          layout="responsive"
                          quality={100}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="w-[100%] h-[200px] text-center bg-cover object-cover shadow-lg my-2"
                          onError={() => setErrorImages([...errorImages, `/assets/projects/${item.image.replace('.jpeg', '')}.3.jpeg`])}
                        />
                      }
                    </div>
                    <div className="col-span-4 shadow-sm rounded-md">
                      {item.imageFive && 
                        <Image
                          src={`/assets/projects/${item.imageFive}`}
                          width={800}
                          height={800}
                          alt="Picture of project"
                          layout="responsive"
                          quality={100}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="w-[100%] h-[200px] text-center bg-cover object-cover shadow-lg my-2"
                          onError={() => setErrorImages([...errorImages, `/assets/projects/${item.image.replace('.jpeg', '')}.3.jpeg`])}
                        />
                      }
                    </div>
                    <div className="col-span-4 shadow-sm rounded-md">
                      {item.imageSix &&
                      <Image
                        src={`/assets/projects/${item.imageSix}`}
                        width={800}
                        height={800}
                        alt="Picture of project"
                        layout="responsive"
                        quality={100}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="w-[100%] h-[250px] text-center bg-cover object-cover shadow-lg my-2"
                        onError={() => setErrorImages([...errorImages, `/assets/projects/${item.image.replace('.jpeg', '')}.2.jpeg`])}
                      />
                      }
                    </div>
                    <div className="col-span-4 shadow-sm rounded-md">
                      {item.imageSeven && 
                        <Image
                          src={`/assets/projects/${item.imageSeven}`}
                          width={800}
                          height={800}
                          alt="Picture of project"
                          layout="responsive"
                          quality={100}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="w-[100%] h-[200px] text-center bg-cover object-cover shadow-lg my-2"
                          onError={() => setErrorImages([...errorImages, `/assets/projects/${item.image.replace('.jpeg', '')}.3.jpeg`])}
                        />
                      }
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-start col-span-6 px-8 max-sm:col-span-12 max-sm:order-1 ">
                  <h1 className="text-[14px] text-white dark:text-white font-[300]">Location: {item.location}</h1>
                  <h1 className="text-[14px] text-white dark:text-white font-[300]">Building Information: {item.building}</h1>
                  <h1 className="text-[14px] text-white dark:text-white font-[300]">Consultants: {item.consultants}</h1>
                  <h1 className="text-[14px] text-white dark:text-white font-[300]">Status: {item.status}</h1>
                  {item.description && <p className="font-[200] text-[14px] my-5 text-white dark:text-white">{item.description}</p>}
                  {item.paragraphTwo && <p className="font-[200] text-[14px] my-5 text-white dark:text-white">{item.paragraphTwo}</p>}
                  {item.paragraphThree && <p className="font-[200] text-[14px] my-5 text-white dark:text-white">{item.paragraphThree}</p>}
                  {item.paragraphFour && <p className="font-[200] text-[14px] my-5 text-white dark:text-white">{item.paragraphFour}</p>}
                  {item.paragraphFive && <p className="font-[200] text-[14px] my-5 text-white dark:text-white">{item.paragraphFive}</p>}
                  {item.paragraphSix && <p className="font-[200] text-[14px] my-5 text-white dark:text-white">{item.paragraphSix}</p>}
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
