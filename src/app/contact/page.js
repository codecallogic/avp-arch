"use client"
import { useState } from "react"
import { useMutation } from "@apollo/client"
import Image from "next/image"
import InputFieldText from '@/app/_components/forms/inputFieldText'
import Button from '@/app/_components/forms/button'

///// MUTATIONS
import CONTACT_ME from '@/app/_mutations/contact'

const Contact = ({}) => {
  
  const [name, setName]                               = useState('')
  const [email, setEmail]                             = useState('')
  const [phone, setPhone]                             = useState('')
  const [address, setAddress]                         = useState('')
  const [adu, setADU]                                 = useState(false)
  const [addition, setAddition]                       = useState(false)
  const [custom, setCustom]                           = useState(false)
  const [remodel, setRemodel]                         = useState(false)
  const [tenantImprovement, setTenantImprovement]     = useState(false)
  const [notSure, setNotSure]                         = useState(false)
  const [instructions, setInstructions]               = useState('')
  const [loading, setLoading]                         = useState('')
  const [message, setMessage]                         = useState('')
  const [dropdown, setDropdown]                       = useState('')

  //// MUTATIONS
  const [contactMe, { dataContactMe, loadingContactMe, errorContactMe }] = useMutation(CONTACT_ME)

  const submitContactMe = async () => {

    if(!name) return setMessage('Name is required')
    if(!email) return setMessage('Email is required')
    setLoading('contactMe')
    
    try {

      const response = await contactMe({
        variables: {
          name: name,
          email: email,
          phone: phone,
          address: address,
          adu: adu,
          addition: addition,
          custom: custom,
          remodel: remodel,
          tenantImprovement: tenantImprovement,
          notSure: notSure,
          instructions: instructions,
        }
      })
      
      setName('')
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
      setMessage(response.data.contact.message)

    } catch (error) {
      setLoading('')
      if(error) setMessage(error.message)
    }
    
  }
  
  return (
    <div className="bg-schemefive text-white dark:text-white py-[250px] h-full w-full flex justify-center max-2xl:px-[200px] max-xl:px-[100px] max-sm:px-[30px] max-sm:py-[150px]">
      <div className="max-xl:col-span-3 max-md:col-span-4">
        <h1 className="text-[60px] font-[200] uppercase text-white dark:text-white  max-sm:text-[42px]">Contact Us</h1>
        <p className="text-[16px] font-[200] text-white dark:text-white">Lets work together 916.399.3767 or arthur@avparch.com.</p>
        <br />
        <p className="text-[16px] font-[200] text-white dark:text-white">Fill out this form or reach out to us via phone or email to schedule a call to discuss your project. </p>
        <br />
        <div className="w-[100%] flex flex-col gap-y-3 my-3">
          <InputFieldText
            inputType={'text'}
            label={'Name *'}
            value={name}
            dispatch={setName}
            type={'name'}
            labelShow={true}
            labelClassOne={'start-1 border-none w-full'}
            dropdown={''}
            setDropdown={setDropdown}
            id={'name'}
          ></InputFieldText>
          <InputFieldText
            inputType={'text'}
            label={'Email *'}
            value={email}
            dispatch={setEmail}
            type={'email'}
            labelShow={true}
            labelClassOne={'start-1 border-none w-full'}
            dropdown={''}
            setDropdown={setDropdown}
            id={'email'}
          ></InputFieldText>
          <InputFieldText
            inputType={'text'}
            label={'Phone Number'}
            value={phone}
            dispatch={setPhone}
            type={'phone'}
            labelShow={true}
            labelClassOne={'start-1 border-none w-full'}
            dropdown={''}
            setDropdown={setDropdown}
            id={'phone'}
          ></InputFieldText>
          <InputFieldText
            inputType={'text'}
            label={'Address or City / County'}
            value={address}
            dispatch={setAddress}
            type={'address'}
            labelShow={true}
            labelClassOne={'start-1 border-none w-full'}
            dropdown={''}
            setDropdown={setDropdown}
            id={'address'}
          ></InputFieldText>
          <h1 className="text-white dark:text-whitemt-5">Choose Your Design Direction</h1>
          <div className="inline-flex items-center text-white dark:text-white">
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
          <div className="inline-flex items-center text-white dark:text-white">
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
          <div className="inline-flex items-center text-white dark:text-white">
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
          <div className="inline-flex items-center text-white dark:text-white">
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
            Renovation
          </div> 
          <div className="inline-flex items-center text-white dark:text-white">
            <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="checkbox">
              <input 
                type="checkbox"
                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                id="checkbox"
                checked={tenantImprovement}
                onChange={() => tenantImprovement ? setTenantImprovement(false) : setTenantImprovement(true)}
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
            Tenant Improvement
          </div>
          <div className="inline-flex items-center text-white dark:text-white">
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
            Other
          </div> 
          <div className="grid grid-cols-1 py-3 w-full">
            <label htmlFor="message" className="block mb-2 text-[18px] text-white dark:text-white">Project Scope</label>
            <textarea 
              id="message" 
              rows="4" 
              className="block p-2.5 w-full text-sm text-schemefive bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-schemefive dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:text-schemefive" 
              placeholder="Brief description"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              >
            </textarea>
          </div>
          { message &&
            <div 
              className="grid grid-cols-1 py-3 w-full px-5 text-white dark:text-white italic"
            >              
              *{message.substring(0,120)}
            </div>
          }
          <div
            onClick={() => submitContactMe()}
          >
            <Button
              label='Submit'
              backgroundColor={'#61B863'}
              svgColor={'white'}
              width={150}
              height={50}
              font={500}
              fullWidth={false}
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
