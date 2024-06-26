
import Footer from "@/app/_components/footer"

const Services = ({}) => {
  
  return (
    <>
    <div className="grid grid-cols-12 h-full">
      <div className="col-span-5 bg-schemefive max-lg:col-span-4 max-md:hidden"></div>
      <div className="col-span-7 bg-schemenine px-20 pb-[250px] max-lg:col-span-8 max-md:col-span-12">
        <div className="mt-[250px] px-[150px] text-white max-2xl:px-[100px] max-xl:px-[50px] max-sm:px-0">
          <h1 className="text-[60px] font-[200] uppercase my-5 max-sm:text-[42px]">Services</h1>
          <h1 className="text-[20px] font-[200]">Our Philosophy at AVP Arch</h1>
          <p className="pt-5 pb-5 font-[200] text-[14px] translate-[.02em] leading-[1.5em]">Pellentesque dapibus congue dui, vel bibendum lectus volutpat id. Morbi accumsan varius pretium. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi velit neque, iaculis at porta sit amet, scelerisque a tellus. Integer interdum auctor leo, non vehicula metus semper vitae.</p>
          <h1 className="text-[20px] font-[200]">Our Specialties</h1>
          <p className="pt-5 pb-5 font-[200] text-[14px] translate-[.02em] leading-[1.5em]">Pellentesque dapibus congue dui, vel bibendum lectus volutpat id. Morbi accumsan varius pretium. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi velit neque, iaculis at porta sit amet, scelerisque a tellus. Integer interdum auctor leo, non vehicula metus semper vitae.</p>
          <p className="pt-5 pb-5 font-[200] text-[14px] translate-[.02em] leading-[1.5em]">Pellentesque dapibus congue dui, vel bibendum lectus volutpat id. Morbi accumsan varius pretium. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi velit neque, iaculis at porta sit amet, scelerisque a tellus. Integer interdum auctor leo, non vehicula metus semper vitae.</p>
          <h1 className="text-[20px] font-[600] mt-10">Ready to get started?</h1>
          <p className="pt-5 pb-5 font-[200] text-[14px] translate-[.02em] leading-[1.5em]">Contact us to request a Design Consultation or explore our portfolio for examples of our work.</p>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </>
  )
}

export default Services
