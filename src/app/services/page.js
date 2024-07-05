
import Footer from "@/app/_components/footer"

const Services = ({}) => {
  
  return (
    <>
    <div className="grid grid-cols-12 h-full">
      <div className="col-span-5 bg-schemefive max-lg:col-span-4 max-md:hidden"></div>
      <div className="col-span-7 bg-schemenine px-20 pb-[250px] max-lg:col-span-8 max-md:col-span-12">
        <div className="mt-[250px] px-[150px] text-white max-2xl:px-[100px] max-xl:px-[50px] max-sm:px-0">
          <h1 className="text-[60px] font-[200] uppercase my-5 max-sm:text-[42px]">Services</h1>
          <h1 className="text-[20px] font-[200]">Typical Plan Set</h1>
          <p className="pt-5 font-[200] text-[14px] translate-[.02em] leading-[1.5em]">Cover Page/Site Plan</p>
          <p className="pt-5 font-[200] text-[14px] translate-[.02em] leading-[1.5em]">Notes/Standards</p>
          <p className="pt-5 font-[200] text-[14px] translate-[.02em] leading-[1.5em]">Floor Plan (Existing/Proposed)</p>
          <p className="pt-5 font-[200] text-[14px] translate-[.02em] leading-[1.5em]">Elevations</p>
          <p className="pt-5 font-[200] text-[14px] translate-[.02em] leading-[1.5em]">Sections</p>
          <p className="pt-5 font-[200] text-[14px] translate-[.02em] leading-[1.5em]">Electrical Plan</p>
          <p className="pt-5 font-[200] text-[14px] translate-[.02em] leading-[1.5em]">Architectural Details</p>
          <h1 className="text-[20px] font-[600] mt-10">Additional Services</h1>
          <p className="pt-5 font-[200] text-[14px] translate-[.02em] leading-[1.5em]">3D Rendering</p>
          <p className="pt-5 font-[200] text-[14px] translate-[.02em] leading-[1.5em]">Framing Plan</p>
          <p className="pt-5 font-[200] text-[14px] translate-[.02em] leading-[1.5em]">Roof Framing Plan</p>
          <p className="pt-5 font-[200] text-[14px] translate-[.02em] leading-[1.5em]">Structural Details</p>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </>
  )
}

export default Services
