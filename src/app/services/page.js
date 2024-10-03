
import Footer from "@/app/_components/footer"

const Services = ({}) => {
  
  return (
    <>
    <div className="relative flex justify-center items-center h-full bg-schemenine">
      <div className="w-[15%] pb-[250px] flex justify-center max-sm:w-[20%]">
        <div className="mt-[250px] text-white max-lg:mt-[150px]">
          <h1 className="text-[60px] font-[200] uppercase my-5 text-center max-sm:text-[42px]">Services</h1>
          {/* Main Services List */}

          <h1 className="text-[14px] font-[600] mt-10 text-left">Residential</h1>

          <div className="">
            <ul className="list-disc list-inside pt-5 px-5 text-[14px] font-[200] leading-[1.5em] max-sm:px-1">
              <li>New construction</li>
              <li>Accessory dwelling unit</li>
              <li>Addition/renovation</li>
              <li>Fire restoration</li>
            </ul>
          </div>
          
          <h1 className="text-[14px] font-[600] mt-10 text-left">Residential</h1>
          
          <div className="">
            <ul className="list-disc list-inside pt-5 px-5 text-[14px] font-[200] leading-[1.5em] max-sm:px-1">
              <li>New construction</li>
              <li>Tenant improvement</li>
              <li>Conditional use permit</li>
            </ul>
          </div>

          <h1 className="text-[14px] font-[600] mt-10 text-left">Additional Services (May include involvement with other Consultants)</h1>

          {/* Additional Services List */}
          <div className="">
            <ul className="list-disc list-inside pt-5 px-5 text-[14px] font-[200] leading-[1.5em] max-sm:px-1">
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
    </div>
    <Footer></Footer>
    </>
  )
}

export default Services
