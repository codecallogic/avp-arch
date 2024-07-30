'use client'
import React, { useEffect, useState } from 'react'
import SVG from '@/app/_libs/svg'
import { navLinks } from '@/app/_constants'
import { usePathname, useRouter } from 'next/navigation'


const Footer = ({}) => {
  
  const router                            = useRouter()
  const pathname                          = usePathname()
  
  return (
    <>
      <footer className="bg-schemeeight w-full relative flex items-center justify-center h-[420px] z-10">
        <div className="">
          <ul className="relative flex items-center px-2 gap-8 w-full max-sm:flex-col max-sm:justify-center max-sm:h-[350px]">
            {navLinks.map((item, idx) => 
              <li 
                className="relative group"
                key={idx}
              >
                <a
                  className="flex items-center justify-end w-[100%] leading-[50px] tracking-wide font-[400] text-white opacity-30  [&>*:nth-child(1)]:ml-2 hover:text-white transition-all ease-in-out uppercase text-[12px] z-5 hover:cursor-pointer hover:opacity-100"
                  onClick={() => router.push(item.href)}
                >
                  {item.label}
                  {item.items.length > 0 &&
                    <SVG
                      svg={'arrowDown'}
                      alt="Arrow Down"
                      width={20}
                      height={20}
                      schemeOne={'#3E8BCC'}
                    />
                  }
                </a>
                {/* <div className="absolute top-[-15px] left-[-5px] text-[52px] font-[600] z-[-1] text-white opacity-10 ">
                  {pathname == item.href ? item.index : ''}
                </div> */}
                <ul className="hidden absolute top-[20px] left-0 mt-4 space-y-2 bg-schemetwo rounded-lg text-gray-700 group-hover:block shadow-2xl hover:cursor-pointer">
                  {item.items.sort((a,b) => a.label.localeCompare(b.label) ).map((subitem, idx) => 
                    <li 
                      key={idx}
                      className="group-hover:block w-[300px] text-white hover:text-black hover:bg-white p-2 transition ease-in-out delay-50 border-b-schemefive rounded-lg font-[600] hover:rounded-top-lg uppercase text-[18px]"
                    >
                      <a href={subitem.href}>{subitem.label}</a>
                    </li>
                  )}
                </ul>
              </li>
            )}
            {/* <div className="absolute top-[-350px] right-[-600px] text-schemeten z-[-1] max-[1650px]:-right-[500px] max-2xl:-right-[400px] max-xl:-right-[280px] max-lg:-right-[50px] max-sm:top-[0px] max-sm:-right-[100px]">
              {navLinks.map((item, idx) => 
                <p key={idx} className="text-white opacity-30 text-[520px] font-[600] max-sm:text-[320px]">{pathname == item.href ? item.index : ''}</p>
              )}
            </div> */}
          </ul>
        </div>
      </footer>
      <footer className="bg-schemeten w-full flex items-center justify-center px-[30px] relative z-10">
        <div className="">
          <ul className="w-full flex items-center px-2 gap-x-8 h-[320px] max-sm:flex-col max-sm:justify-center max-sm:items-start max-sm:h-[350px] max-sm:gap-y-3">
            <li 
              className="relative group"
            >
              <a
                className="flex flex-col items-start justify-start gap-y-3 tracking-wide font-[400] text-schemeseven transition-all ease-in-out uppercase text-[12px]"
              >
                <h1>Studio</h1>
                <span className="text-schemenine">Sacramento, CA 95843</span>
              </a>
            </li>
            <li 
              className="relative group"
            >
              <a
                className="flex flex-col items-start justify-start gap-y-3 tracking-wide font-[400] text-schemeseven transition-all ease-in-out uppercase text-[12px]"
              >
                <h1>Contact</h1>
                <span className="text-schemenine hover:cursor-pointer hover:text-white">916.399.3767</span>
              </a>
            </li>
            <li 
              className="relative group"
            >
              <a
                className="flex flex-col items-start justify-start gap-y-3 tracking-wide font-[400] text-schemeseven transition-all ease-in-out uppercase text-[12px]"
              >
                <h1>Legal</h1>
                <span className="text-schemenine">AVP Arch @ 2024</span>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default Footer
