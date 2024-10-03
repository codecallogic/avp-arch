'use client'
import React, { useEffect, useState } from 'react'
import SVG from '@/app/_libs/svg'
import Image from 'next/image'
import { navLinks } from '@/app/_constants'
import { initApp } from '@/app/_helpers/main' 
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation'
import { useSelector } from 'react-redux'
import { logout } from "@/app/_redux/features/authSlice";
import { useDispatch } from "react-redux";
import Cookies from 'universal-cookie';

function Nav() {

  const router                            = useRouter()
  const pathname                          = usePathname()
  const dispatch                          = useDispatch();
  const uCookies                          = new Cookies();
  const authReducer                       = useSelector((state) => state.authReducer.value.loggedIn)
  const [loginState, setLoginState]       = useState(false)
  const [isFixed, setIsFixed]             = useState(false);
  const [dropdown, setDropdown]           = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Adjust the scroll threshold as needed
      const threshold = 140;

      // Check if the scroll position is beyond the threshold
      if (scrollPosition > threshold) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    // Attach the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Detach the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  const fixedClass = isFixed ? ` bg-white h-[115px] max-md:h-[90px] ${pathname == '/' ? ' bg-opacity-[50%] ' : '' }` : ` bg-white ${pathname == '/' ? ' bg-opacity-[50%] ' : '' }`;

  useEffect(() => {
    setLoginState(authReducer)
  }, [authReducer])

  const logoutUser = () => {
    
    try {
      dispatch(logout())
      uCookies.remove('token', { path: `${process.env.NEXT_SITE_URL}/${pathname}` });
      uCookies.remove('user', { path: `${process.env.NEXT_SITE_URL}/${pathname}` });
    } catch (error) {
      console.log(error)
    }
    
  }
  
  return (
    <header 
      id="nav" 
      className={`fixed z-30 w-full ${fixedClass} `}
      style={{ 
        boxShadow: pathname == '/signup' ? 'none' : '',
      }}
    >
      <nav className="flex items-center justify-between max-container h-[120px] px-[30px] max-xl:px-[30px] max-sm:px-[20px] max-md:h-[90px] max-md:flex-row-reverse">
        <div className="max-md:hidden">
          <ul className="flex items-center px-2 gap-8 w-full">
            {navLinks.map((item, idx) => 
              <li 
                className="relative group"
                key={idx}
              >
                <a
                  className="flex items-center justify-end w-[100%] leading-[50px] tracking-wide font-[600] text-gray-600 [&>*:nth-child(1)]:ml-2 hover:text-schemetwo transition-all ease-in-out uppercase text-[12px] z-5 hover:cursor-pointer"
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
                {/* <div className="absolute top-[-15px] left-[-5px] text-[52px] font-[600] text-[#DFE8EA] opacity-2 z-[-1]">
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
          </ul>
        </div>
        <Image
          src="/assets/logo.png"
          width={250}
          height={250}
          alt="Picture of the author"
          className="w-[80px] h-auto"
        />
        <button 
          id="hamburger-button"
          className='hidden max-md:flex max-lg:items-center max-lg:gap-x-5 text-3xl relative w-full h-8 hover:cursor-pointer'
        >
          <div 
            className="
              border-2
              border-schemeseven
              p-1
              px-5
              text-[14px]
              text-schemeseven
              uppercase
            "
            // className="
            //   bg-schemefour 
            //   w-8 
            //   h-1 
            //   rounded 
            //   absolute 
            //   top-2 
            //   mt-1.5 
            //   before:content-[''] 
            //   before:bg-schemefour 
            //   before:w-8
            //   before:h-1 
            //   before:rounded 
            //   before:absolute 
            //   before:-translate-x-4
            //   before:-translate-y-2
            //   before:transition-all
            //   before:duration-500
            //   after:content-[''] 
            //   after:bg-schemefour 
            //   after:w-8 
            //   after:h-1 
            //   after:rounded 
            //   after:absolute 
            //   after:-translate-x-4
            //   after:translate-y-2
            //   after:transition-all
            //   after:duration-500
            // "
            onClick={(e) => (e.stopPropagation,  initApp())}
          >
            Menu
          </div>
        </button>
        {/* <div className="hidden max-lg:block max-md:hidden"></div> */}
        <section 
          id="mobile-menu"
          className="fixed top-[0px] left-[20px] z-200 bg-white flex-col justify-center w-[250px] origin-left animate-open-menu hidden shadow-[20px_90px_60px_15px_rgba(0,0,0,0.3)] ml-[-30px]"
        >
          <div className="w-full flex items-center justify-between py-12 hover:cursor-pointer pl-10 pr-5">
            <img className="w-[50%]" src="/assets/logo.png" alt="avp parch Logo" />
            <div
              onClick={() => initApp()}
            >
              <SVG
                svg={'close'}
                width={25}
                height={25}
                schemeOne={'#b7b7b7'}
              />
            </div>
          </div>
          <ul 
            className="flex flex-col mt-[-50px] min-h-screen items-start py-12 px-2" aria-label="mobile"
          >
            {navLinks.map((item, idx) => 
              <li 
                className="relative group w-full"
                key={idx}
              >
                <a 
                  onClick={() => (
                    router.push(item.href),
                    initApp()
                  )}
                  className="flex items-center text-[14px] text-schemeseven w-full text-center py-5 hover:opacity-90 border-b-[1px] border-schemeseven border-opacity-[.7] transition-all duration-800 hover:-translate-y-2 px-6 hover:cursor-pointer">
                  <span className="ml-3 max-sm:text-[14px] mr-3">{item.label}</span>
                </a>
                <div
                  className="absolute top-5 right-2"
                  onClick={() => dropdown == item.label ? setDropdown('') : setDropdown(item.label)}
                >
                {item.items.length > 0 &&
                  <SVG
                    svg={'arrowDown'}
                    alt="Arrow Down"
                    width={20}
                    height={20}
                    schemeOne={'#3E8BCC'}
                  />
                }
                </div>
                { dropdown == item.label &&
                  <ul className="absolute top-[40px] left-3 mt-4 space-y-2 bg-schemeseven rounded-lg text-gray-700 shadow-2xl z-20 hover:cursor-pointer">
                    {item.items.sort((a,b) => a.label.localeCompare(b.label) ).map((subitem, idx) => 
                      <li 
                        key={idx}
                        className="w-[220px] text-white hover:text-black hover:bg-white p-2 transition ease-in-out delay-50 border-b-schemefive text-[16px] hover:rounded-top-lg capitalize hover:cursor-pointer"
                        onClick={() => (router.push(subitem.href), setDropdown(''))}
                      >
                        {subitem.label}
                      </li>
                    )}
                  </ul>
                }
              </li>
            )}
          </ul>
        </section>
      </nav>
    </header>
  )
}

export default Nav