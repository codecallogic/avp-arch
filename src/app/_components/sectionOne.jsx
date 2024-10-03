
import Button from "./forms/button"
import { useRouter } from 'next/navigation';

const SectionOne = ({}) => {
  
  const router                                = useRouter()
  
  return (
    <div className="relative bg-black text-schemeseven z-20 -top-[180px] mt-10 shadow-[200px_-20px_150px_20px_rgba(0,0,0,.9)] pb-[200px] max-lg:-top-[350px] max-sm:-top-[450px]">
      {/* <div className="p-5">
        <span className="text-[12px] font-[400]">Developer: AVP Arch</span>
        <br />
        <span className="text-[14px] uppercase font-[400]">Designed By: Arthur</span>
      </div> */}
      <div className="flex justify-center items-start mt- pt-10 pb-[100px] max-md:px-10">
        <div className="w-[600px] flex flex-col justify-center items-start">
          <h1 className="text-[52px] font-[200] mb-5 uppercase">It just starts with a vision, and we will help you see it through.</h1>
          <h2 className="text-[22px] font-[200] uppercase my-10">Our primary focus is to transform your goal into reality by creating residential design buildings in Sacramento, California and the surrounding area. </h2>
          <br />
          <p className="text-[16px] font-[200]">Designing spaces requires a thoughtful and intentional approach to create functional, aesthetically pleasing environments that fundamentally meet the owners personal needs. This involves considering factors such as circulation, ergonomics, and using materials, textures, and colors that evoke emotions to foster a sense of community within the home.</p>
          <br />
          <p className="text-[16px] font-[200]">I am enthusiastic about assisting you in bringing your ideas to fruition, whether it involves a new home build, ADU, addition, or renovation. Throughout the project, you will receive guidance along the way, from brainstorming and planning to developing construction plans. Together, we will work towards transforming your vision into a concrete reality. </p>
          <br />
          <div 
            className="my-10"
            onClick={() => router.push('/projects')}
          >
            <Button
              label='View Projects'
              backgroundColor={'#61B863'}
              svgColor={'white'}
              width={150}
              height={50}
              font={500}
              fullWidth={true}
              textColor={'#FFFFFF'}
              borderColor={'#252627'}
              svg={''}
              href={''}
              borderRadius={false}
              loading={'false'}
              loadingType={''}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionOne
