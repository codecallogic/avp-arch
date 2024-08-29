
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
        <div className="relative flex justify-center items-center mt-200 h-full shadow-2xl">
          <div className="w-[50%] mt-[120px] py-10 flex justify-center flex-col max-2xl:w-[60%] max-xl:w-[75%] max-lg:w-[85%]">
            <h1 className="text-[60px] px-20 w-[80%] font-[200] text-white dark:text-white uppercase">Our Story</h1>
            <div className="flex flex-col items-center px-20 w-[80%]">
              <Image
                src="/assets/aboutone.png"
                width={400}
                height={400}
                alt="Picture of the author"
                className="w-[200px] h-[200px] text-center bg-cover object-cover object-[0_20%] shadow-xl rounded-full my-10 max-md:mx-10"
              />
              <h1 
                className="mt-[30px] w-max px-20 uppercase text-[22px] font-[200] text-white dark:text-white" 
              >
                <div>Arthur Pristupa</div>
                <span className="block text-center text-[14px] lowercase">Owner</span>
              </h1>
            </div>
            <div className="px-20 mt-20 w-[80%] max-md:px-10 max-md:w-[100%]">
              <div className="grid grid-cols-2 pt-10 pb-5 font-[200] text-[16px] translate-[.02em] leading-[1.5em] max-lg:grid-cols-1">
                <div className="col-span-1">
                  <Image
                    src="/assets/abouttwo.png"
                    width={400}
                    height={400}
                    alt="Picture of the author"
                    className="w-[90%] h-[150px] text-center bg-cover object-cover max-lg:mb-5 max-md:h-[250px] max-lg:w-[100%]"
                  />
                </div>
                <p className="col-span-1">AVP Arch Drafting was established in 2017 with the goal of realizing clients' visions and projects. Whether it's small-scale or large-scale work, each project comes with its own set of requirements and obstacles. This has greatly assisted us in anticipating and circumventing these obstacles in advance.</p>
              </div>
              <h1 className="text-[24px] font-[200] text-schemeeight uppercase">Process</h1>
              <p className="pt-5 pb-5 font-[200] text-[16px] translate-[.02em] leading-[1.5em]">We encompass the creative and technical process of designing homes, adus, and other living spaces. We understand that effective space design requires an understanding of how people interact with each other within the space.</p>
              <div className="grid grid-cols-2 pt-10 pb-5 font-[200] text-[16px] translate-[.02em] leading-[1.5em] max-lg:grid-cols-1">
                <div className="col-span-1">
                  <Image
                    src="/assets/aboutthree.png"
                    width={400}
                    height={400}
                    alt="Picture of the author"
                    className="w-[90%] h-[150px] text-center bg-cover object-cover max-lg:mb-5 max-md:h-[250px] max-lg:w-[100%]"
                  />
                </div>
                <p className="col-span-1">Our expertise lies in the fusion of creativity and technical skills to design residential spaces, including ADUs, with a focus on efficient space utilization. We acknowledge the importance of comprehending human interaction within a space for an effective design.</p>
              </div>
              <div className="grid grid-cols-2 pt-10 pb-5 font-[200] text-[16px] translate-[.02em] leading-[1.5em] max-lg:grid-cols-1">
                <div className="col-span-1">
                  <Image
                    src="/assets/aboutfour.png"
                    width={400}
                    height={400}
                    alt="Picture of the author"
                    className="w-[90%] h-[150px] text-center bg-cover object-cover max-lg:mb-5 max-md:h-[250px] max-lg:w-[100%]"
                  />
                </div>
                <p className="col-span-1">Bringing an idea to life entails grasping the requirements and desires of the inhabitants, while also taking into account aspects like site arrangement, spatial organization, financial constraints, and regulatory guidelines.</p>
              </div>
              <p className="pt-5 pb-5 font-[200] text-[16px] translate-[.02em] leading-[1.5em]">Whether it's contemporary open-concept living or conventional family dwellings, we are well-equipped to tackle the obstacles each project phase presents.</p>
              <p className="pt-5 pb-5 font-[200] text-[16px] translate-[.02em] leading-[1.5em]">Reach out to us via phone or email to schedule a call to discuss your project.</p>
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
          {/* <div className="col-span-2 bg-schemenine z-50 max-xl:col-span-1 max-lg:hidden"></div> */}
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
