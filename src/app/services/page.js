
import Footer from "@/app/_components/footer"

const Services = ({}) => {
  
  return (
    <>
    <div className="relative flex justify-center items-center h-full bg-schemenine ">
      <div className="w-[60%] pb-[250px]">
        <div className="mt-[250px] px-[100px] text-white max-2xl:px-[100px] max-xl:px-[50px] max-sm:px-0 max-lg:mt-[150px]">
          <h1 className="text-[60px] font-[200] uppercase my-5 text-center max-sm:text-[42px]">Services</h1>
          {/* Main Services List */}
          <ul className="list-disc list-inside pt-5 px-5 text-[14px] font-[200] leading-[1.5em]">
            <li>Typical Plan Set</li>
            <li>Cover Page/Site Plan</li>
            <li>Notes/Standards</li>
            <li>Floor Plan (Existing/Proposed)</li>
            <li>Elevations</li>
            <li>Sections</li>
            <li>Electrical Plan</li>
            <li>Architectural Details</li>
          </ul>

          <h1 className="text-[18px] font-[600] mt-10 text-center">Additional Services (May include involvement with other Consultants)</h1>
          
          {/* Additional Services List */}
          <ul className="list-disc list-inside pt-5 px-5 text-[14px] font-[200] leading-[1.5em]">
            <li>3D Rendering</li>
            <li>Foundation Plans</li>
            <li>Framing Plan</li>
            <li>Roof Framing Plan</li>
            <li>Structural Details</li>
            <li>Structural Calculations</li>
            <li>Title 24 (T24)</li>
            <li>Solar Design</li>
            <li>Sprinkler Design</li>
            <li>Truss Design</li>
            <li>ISO Plumbing Plans</li>
          </ul>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </>
  )
}

export default Services
