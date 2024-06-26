"use client"
import { useState } from "react"
import { useMutation } from "@apollo/client"
import Image from "next/image"
import InputFieldText from '@/app/_components/forms/inputFieldText'
import Button from '@/app/_components/forms/button'

///// MUTATIONS
import CONTACT_ME from '@/app/_mutations/contact'

const Contact = ({}) => {
  
  const [firstName, setFirstName]       = useState('')
  const [lastName, setLastName]         = useState('')
  const [email, setEmail]               = useState('')
  const [phone, setPhone]               = useState('')
  const [address, setAddress]           = useState('')
  const [adu, setADU]                   = useState(false)
  const [addition, setAddition]         = useState(false)
  const [custom, setCustom]             = useState(false)
  const [remodel, setRemodel]           = useState(false)
  const [notSure, setNotSure]           = useState(false)
  const [instructions, setInstructions] = useState('')
  const [loading, setLoading]           = useState('')
  const [message, setMessage]           = useState('')
  const [dropdown, setDropdown]         = useState('')

  //// MUTATIONS
  const [contactMe, { dataContactMe, loadingContactMe, errorContactMe }] = useMutation(CONTACT_ME)

  const submitContactMe = async () => {

    setLoading('contactMe')
    
    try {

      const response = await contactMe({
        variables: {
          firstName: firstName,
          lastName: lastName,
          email: email,
          phone: phone,
          address: address,
          adu: adu,
          addition: addition,
          custom: custom,
          remodel: remodel,
          notSure: notSure,
          instructions: instructions,
        }
      })
      
      setFirstName('')
      setLastName('')
      setEmail('')
      setPhone('')
      setAddress('')
      setADU(false)
      setAddition(false)
      setCustom(false)
      setRemodel(false)
      setNotSure(false)
      setInstructions('')
      setLoading('')
      setMessage(response.data.contactMe.message)

    } catch (error) {
      setLoading('')
      if(error) setMessage(error.message)
    }
    
  }
  
  return (
    <div className="px-[300px] py-[250px] h-full grid grid-cols-4 max-2xl:px-[200px] max-xl:px-[100px] max-sm:px-[30px] max-sm:py-[150px]">
      <div className="col-span-2 max-xl:col-span-3 max-md:col-span-4">
        <h1 className="text-[60px] font-[200] uppercase text-schemenine max-sm:text-[42px]">Contact Us</h1>
        <h2 className="text-[24px] font-[200] uppercase text-schemenine py-8">READY TO TRANSFORM YOUR SPACE?</h2>
        <p className="text-[16px] font-[200] text-schemefive">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
        <br />
        <p className="text-[16px] font-[200] text-schemefive">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        <h2 className="text-[24px] font-[200] uppercase text-schemenine mt-10 mb-5">Secure Your Spot for 2024 Book Your Design Consultation</h2>
        <p className="text-[16px] font-[200] text-schemefive">You're just a moment away from joining our community of homeowners living in a space they love. Please complete the form below and click 'Book My Design Consultation' to start. We can't wait to meet you and collaborate to design your ideal space. Welcome to the family!</p>
        <div className="w-[80%] flex flex-col gap-y-3 my-3">
          <InputFieldText
            inputType={'text'}
            label={'First Name *'}
            value={firstName}
            dispatch={setFirstName}
            type={'firstName'}
            labelShow={true}
            labelClassOne={'start-0 border-none w-full'}
            dropdown={''}
            setDropdown={setDropdown}
            id={'firstName'}
          ></InputFieldText>
          <InputFieldText
            inputType={'text'}
            label={'Last Name *'}
            value={lastName}
            dispatch={setLastName}
            type={'lastName'}
            labelShow={true}
            labelClassOne={'start-0 border-none w-full'}
            dropdown={''}
            setDropdown={setDropdown}
            id={'lastName'}
          ></InputFieldText>
          <InputFieldText
            inputType={'text'}
            label={'Email *'}
            value={email}
            dispatch={setEmail}
            type={'email'}
            labelShow={true}
            labelClassOne={'start-0 border-none w-full'}
            dropdown={''}
            setDropdown={setDropdown}
            id={'email'}
          ></InputFieldText>
          <InputFieldText
            inputType={'text'}
            label={'Phone Number *'}
            value={phone}
            dispatch={setPhone}
            type={'phone'}
            labelShow={true}
            labelClassOne={'start-0 border-none w-full'}
            dropdown={''}
            setDropdown={setDropdown}
            id={'phone'}
          ></InputFieldText>
          <InputFieldText
            inputType={'text'}
            label={'Address *'}
            value={address}
            dispatch={setAddress}
            type={'address'}
            labelShow={true}
            labelClassOne={'start-0 border-none w-full'}
            dropdown={''}
            setDropdown={setDropdown}
            id={'address'}
          ></InputFieldText>
          <h1 className="text-schemeseven mt-5">Choose Your Design Direction</h1>
          <div className="inline-flex items-center text-schemeseven">
            <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="checkbox">
              <input 
                type="checkbox"
                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                id="checkbox"
                checked={adu}
                onChange={() => adu ? setADU(false) : setADU(true)}
              />
              <span
                className="absolute text-schemetwo transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                  stroke="currentColor" strokeWidth="1">
                  <path fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"></path>
                </svg>
              </span>
            </label>
            Accessory Dwelling Unit (ADU)
          </div> 
          <div className="inline-flex items-center text-schemeseven">
            <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="checkbox">
              <input 
                type="checkbox"
                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                id="checkbox"
                checked={addition}
                onChange={() => addition ? setAddition(false) : setAddition(true)}
              />
              <span
                className="absolute text-schemetwo transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                  stroke="currentColor" strokeWidth="1">
                  <path fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"></path>
                </svg>
              </span>
            </label>
            Addition
          </div> 
          <div className="inline-flex items-center text-schemeseven">
            <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="checkbox">
              <input 
                type="checkbox"
                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                id="checkbox"
                checked={custom}
                onChange={() => custom ? setCustom(false) : setCustom(true)}
              />
              <span
                className="absolute text-schemetwo transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                  stroke="currentColor" strokeWidth="1">
                  <path fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"></path>
                </svg>
              </span>
            </label>
            Custom Home
          </div> 
          <div className="inline-flex items-center text-schemeseven">
            <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="checkbox">
              <input 
                type="checkbox"
                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                id="checkbox"
                checked={remodel}
                onChange={() => remodel ? setRemodel(false) : setRemodel(true)}
              />
              <span
                className="absolute text-schemetwo transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                  stroke="currentColor" strokeWidth="1">
                  <path fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"></path>
                </svg>
              </span>
            </label>
            Remodel
          </div> 
          <div className="inline-flex items-center text-schemeseven">
            <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="checkbox">
              <input 
                type="checkbox"
                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                id="checkbox"
                checked={notSure}
                onChange={() => notSure ? setNotSure(false) : setNotSure(true)}
              />
              <span
                className="absolute text-schemetwo transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                  stroke="currentColor" strokeWidth="1">
                  <path fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"></path>
                </svg>
              </span>
            </label>
            I'm Not Sure/I'd Like to Discuss Further
          </div> 
          <div className="grid grid-cols-1 py-3 w-full">
            <label htmlFor="message" className="block mb-2 text-[18px] text-schemeseven">Project Scope</label>
            <textarea 
              id="message" 
              rows="4" 
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 border-none outline-none" 
              placeholder="What Inspired You to Start This Project? What are you Looking to Achieve? Describe your project... Include any needs, goals, or wants."
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              >
            </textarea>
          </div>
          
          <div
            onClick={() => submitContactMe()}
          >
            <Button
              label='Book my design consultation'
              backgroundColor={'#564E58'}
              svgColor={'white'}
              width={150}
              height={50}
              font={500}
              fullWidth={true}
              textColor={'#FFFFFF'}
              borderColor={'#564E58'}
              svg={''}
              href={''}
              borderRadius={false}
              loading={loading}
              loadingType={'contactMe'}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
