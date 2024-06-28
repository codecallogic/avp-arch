
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
      <div className="bg-schemefive relative w-full grid grid-cols-10 mt-200 h-full pb-20">
        <div className="col-span-2 max-2xl:col-span-1 max-lg:hidden"></div>
        <div className="col-span-6 items-center px-20 max-2xl:col-span-8 max-lg:col-span-10 max-lg:px-0">
          <h1 className="uppercase text-[60px] mt-[200px] font-[300] text-white dark:text-white px-20 mb-10">Projects</h1>
          { projects.length > 0 && projects.map((item, idx) => 
            <div 
              key={idx}
              className="flex flex-col items-center px-10 max-lg:items-center"
            >
              <Image
                src={`/assets/projects/${item.image}`}
                width={800}
                height={800}
                alt="Picture of project"
                className="w-[100%] h-[500px] text-center bg-cover object-cover shadow-lg my-10 min-[2800px]:h-[700px] max-lg:w-[80%] max-sm:w-[100%]"
              /> 
              <div className="w-[100%] grid grid-cols-12 my-3 max-lg:w-[80%] max-sm:w-[100%]">
                <div className="col-span-5 max-sm:col-span-12 max-sm:my-3 max-sm:order-2">
                  <div className="grid grid-cols-8 animate-fade-in gap-x-2">
                    <div className="col-span-6 shadow-sm rounded-md">
                    {item.video &&
                      <video className="h-[250px]" width="320" height="240" controls preload="none">
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
                    <div className="col-span-6 shadow-sm rounded-md">
                      {item.imageTwo &&
                        <Image
                          src={`/assets/projects/${item.imageTwo}`}
                          width={800}
                          height={800}
                          alt="Picture of project"
                          className="w-[100%] h-[250px] text-center bg-cover object-cover shadow-lg my-2"
                          onError={() => setErrorImages([...errorImages, `/assets/projects/${item.image.replace('.jpeg', '')}.1.jpeg`])}
                        />
                      }
                    </div>
                    <div className="col-span-3 shadow-sm rounded-md">
                      {item.imageThree &&
                      <Image
                        src={`/assets/projects/${item.imageThree}`}
                        width={800}
                        height={800}
                        alt="Picture of project"
                        className="w-[100%] h-[250px] text-center bg-cover object-cover shadow-lg my-2"
                        onError={() => setErrorImages([...errorImages, `/assets/projects/${item.image.replace('.jpeg', '')}.2.jpeg`])}
                      />
                      }
                    </div>
                    <div className="col-span-3 shadow-sm rounded-md">
                      {item.imageFour && 
                        <Image
                          src={`/assets/projects/${item.imageFour}`}
                          width={800}
                          height={800}
                          alt="Picture of project"
                          className="w-[100%] h-[200px] text-center bg-cover object-cover shadow-lg my-2"
                          onError={() => setErrorImages([...errorImages, `/assets/projects/${item.image.replace('.jpeg', '')}.3.jpeg`])}
                        />
                      }
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-start col-span-7 px-10 max-sm:col-span-12 max-sm:order-1">
                  <h1 className="text-[32px] text-white dark:text-white font-[300]">{item.title}</h1>
                  <h1 className="text-[14px] text-white dark:text-white font-[300]">Location: {item.location}</h1>
                  <h1 className="text-[14px] text-white dark:text-white font-[300]">Building Information: {item.building}</h1>
                  <h1 className="text-[14px] text-white dark:text-white font-[300]">Consultants: {item.consultants}</h1>
                  <h1 className="text-[14px] text-white dark:text-white font-[300]">Status: {item.status}</h1>
                  { readMore !== item.title &&
                    <p className="font-[200] text-[14px] my-5 text-white dark:text-white">{item.description.substring(0, item.shortDescr)}</p>
                  }
                  { readMore == item.title &&
                    <p 
                      className="font-[200] text-[14px] my-5 animate-fade-in text-white dark:text-white"
                    >
                      {item.description}
                    </p>
                  }
                   { readMore == item.title &&
                      <div className="w-full flex justify-center">
                      <div 
                        className="w-max text-schemeseven border-b-schemeseven border-b-2 my-3 outline-none p-3 hover:cursor-pointer hover:scale-[120%] hover:text-schemenine hover:transition hover:duration-700 hover:ease-in-out"
                        onClick={() => setReadMore('')}
                      >
                        <span>Show less</span>
                      </div>
                    </div>
                    }
                    { readMore !== item.title &&
                    <div className="w-full flex justify-center">
                      <div 
                        className="w-max text-schemeseven border-b-schemeseven border-b-2 my-3 outline-none p-3 hover:cursor-pointer hover:scale-[120%] hover:text-schemenine hover:transition hover:duration-700 hover:ease-in-out"
                        onClick={() => setReadMore(item.title)}
                      >
                        <span>Read more</span>
                      </div>
                    </div>
                    }
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="col-span-2 max-xl:col-span-1 max-lg:hidden"></div>
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
