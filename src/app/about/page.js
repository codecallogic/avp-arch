
"use client"
import Image from "next/image"
import Footer from "@/app/_components/footer"
import Button from "@/app/_components/forms/button"
import { useRouter } from 'next/navigation';

const About = ({}) => {
  
  const router                          = useRouter()
  
  return (
    <>
    <div className="h-full bg-schemefive text-white dark:text-white">
      <div className="relative">
        <div className="relative w-full grid grid-cols-10 mt-200 h-full shadow-2xl">
          <div className="w-full mt-[120px] py-10 flex justify-start items-end flex-col col-span-3 max-md:hidden">
            <h3 className="text-schemeone text-[12px] uppercase sticky top-[calc(4rem+200px)]">About Arthur</h3>
            <h3 className="text-schemeone text-[12px] uppercase sticky top-[calc(4rem+220px)]">About his work</h3>
          </div>
          <div className="w-full mt-[120px] py-10 flex justify-start flex-col col-span-5 max-xl:col-span-6 max-lg:col-span-7 max-md:col-span-10">
            <h1 
              className="mt-[100px] px-20 uppercase text-[22px] font-[200] text-white dark:text-white" 
            >
            Arthur Pristupa
            </h1>
            <Image
              src="/assets/aboutone.png"
              width={400}
              height={400}
              alt="Picture of the author"
              className="w-[50%] h-[400px] text-center bg-cover object-cover shadow-md mx-2 my-10 max-lg:w-[75%] max-md:mx-10"
            />
            <div className="px-20 mt-20 w-[80%] max-md:px-10 max-md:w-[100%]">
              <h1 className="text-[60px] font-[200] text-white dark:text-white uppercase">Our Story</h1>
              <div className="grid grid-cols-2 pt-10 pb-5 font-[200] text-[16px] translate-[.02em] leading-[1.5em] max-lg:grid-cols-1">
                <div className="col-span-1">
                  <Image
                    src="/assets/abouttwo.jpeg"
                    width={400}
                    height={400}
                    alt="Picture of the author"
                    className="w-[90%] h-[150px] text-center bg-cover object-cover shadow-md max-lg:mb-5 max-md:h-[250px] max-lg:w-[100%]"
                  />
                </div>
                <p className="col-span-1">AVP Architecture began in 2017 with a desire to bring clients ideas and projects to life. From small to larger type work, each is unique with its needs and challenges.</p>
              </div>
              <h1 className="text-[24px] font-[200] text-schemeeight uppercase">Process</h1>
              <p className="pt-5 pb-5 font-[200] text-[16px] translate-[.02em] leading-[1.5em]">We hope to make the process smooth and understandable for you, whether it’s just a few renderings to pitch an idea or a full house plan permit set, be confident that your project will be in the right hands. We encompass the creative and technical process of designing homes, adus, and other living spaces. We understand that effective space design requires an understanding of how people interact with each other within the space.</p>
              <div className="grid grid-cols-2 pt-10 pb-5 font-[200] text-[16px] translate-[.02em] leading-[1.5em] max-lg:grid-cols-1">
                <div className="col-span-1">
                  <Image
                    src="/assets/aboutthree.png"
                    width={400}
                    height={400}
                    alt="Picture of the author"
                    className="w-[90%] h-[150px] text-center bg-cover object-cover shadow-md max-lg:mb-5 max-md:h-[250px] max-lg:w-[100%]"
                  />
                </div>
                <p className="col-span-1">Bringing a concept to reality involves understanding the needs and preferences of the occupants, as well as considering factors such as site planning, spacial layout, budget, and local building regulation. </p>
              </div>
              <p className="pt-5 pb-5 font-[200] text-[16px] translate-[.02em] leading-[1.5em]">From modern open plan living to traditional family homes we understand the challenges that each phase may have and are ready to take them on.</p>
              <div 
                className="my-10"
                onClick={() => router.push('/contact')}
              >
                <Button
                  label='Contact us'
                  backgroundColor={'white'}
                  svgColor={'white'}
                  width={150}
                  height={50}
                  font={400}
                  fullWidth={false}
                  textColor={'#252627'}
                  borderColor={'#242529'}
                  svg={''}
                  href={''}
                  borderRadius={false}
                  loading={'false'}
                  loadingType={''}
                />
              </div>
            </div>
          </div>
          <div className="col-span-2 bg-schemenine z-50 max-xl:col-span-1 max-lg:hidden"></div>
        </div>
      </div>
      <div 
        className=""
      >
        <Footer/>
      </div>
    </div>
    </>
  )
}

export default About
