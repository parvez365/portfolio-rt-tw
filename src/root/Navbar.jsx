import { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';

import { AiOutlineHome } from "react-icons/ai";
import { LuContact } from "react-icons/lu";
import { LuCircleUser } from "react-icons/lu";
import { FaRegAddressCard } from "react-icons/fa";
import { VscFolderOpened } from "react-icons/vsc";
import { SlBriefcase } from "react-icons/sl";
import { TfiWrite } from "react-icons/tfi";

import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { Link as LinkFromDom, NavLink } from 'react-router';

import NavReusable from '../reusable/NavReusable';
import { Link } from 'react-scroll';

const Navbar = () => {

  let [show, setShow] = useState(false)

  return (
    <>
      <div className="h-screen fixed left-0 top-0 z-10 bg-black">
        <div className="lg:block hidden">
          <div className="w-26 h-20.5 bg-Main flex justify-center items-center">
            <LinkFromDom to="/">
              <h2 className='font-Montserrat font-bold lgx:text-[52px] leading-18 text-[56px] text-white text-center'>Pz</h2>
            </LinkFromDom>
          </div>
            <ul className='flex flex-col'>
              <Link to='hero' smooth={true} duration={500}><NavReusable name="Home" icon={AiOutlineHome} /></Link>
              <Link to='about' smooth={true} duration={500}><NavReusable name="About Me" icon={LuCircleUser}/></Link>
              <Link to='resume' smooth={true} duration={500}><NavReusable name="Resume" icon={FaRegAddressCard}/></Link>
              <Link to='services' smooth={true} duration={500}><NavReusable name="Service" icon={SlBriefcase}/></Link>
              <Link to='portfolio' smooth={true} duration={500}><NavReusable name="Portfolio" icon={VscFolderOpened}/></Link>
              <Link to='blog' smooth={true} duration={500}><NavReusable name="Blogs" icon={TfiWrite}/></Link>
              <Link to='contact' smooth={true} duration={500}><NavReusable name="Contact" icon={LuContact}/></Link>
            </ul>
          {/* <div className="">
            <button className='w-[110px] h-[220px] bg-Main flex justify-center items-center'><span className='rotate-90 font-Montserrat font-medium uppercase text-[14px] text-white relative after:absolute after:content[""] after:right-[-24px] after:top-[-2px] after:w-px after:h-[25px] after:bg-white after:rotate-90'>Contact me</span></button>
          </div> */}
        </div>
      </div>

      {/* Mobile Navbar Part Start Here */}

      <div className="lg:hidden bg-[#3e4041] ">
        <div className="flex justify-between items-center">
          <div className="w-16 h-15.5 bg-Main flex justify-center">
            <LinkFromDom to="/">
              <h2 className='font-Montserrat font-bold text-[40px] text-white text-center'>Pz</h2>
            </LinkFromDom>
          </div>
            <ul className={ `absolute ${show == true ? 'top-0 left-0 md:w-2/5 sm:w-2/5 w-2/3 max-xsl:w-4/5 z-10 bg-[#f7f5ff] duration-700' : 'top-0 -left-full w-1/2 duration-700' } ` }>
              <div className="mb-5 pt-8 px-3 text-center">
                  <div className="w-21 h-26 mx-auto mb-2.5">
                    <img className='w-full rounded-full border-2 border-solid border-Main_Hv' src="https://i.postimg.cc/P5SPK5HQ/Mob-menu.png" alt="Mobile menu image" />
                  </div>
                  <h3 className='font-play-fair font-semibold text-[26px] text-[#292929c5] duration-500 mb-1.25'>I'm <span className=''>Parvez</span></h3>
                  <span className=" font-Montserrat font-normal text-base text-[#7a7a7a] tracking-wider">
                    <Typewriter
                      words={['A Frontend Developer', 'I Develop using React']}
                      loop={5}
                      cursor
                      cursorStyle='_'
                      typeSpeed={300}
                      deleteSpeed={200}
                      delaySpeed={1000}
                    />
                  </span>
              </div>
              <Link to='hero' smooth={true} duration={500} className='group w-full py-4 px-6 border-b border-t border-solid border-[#eaeaea] bg-[#f7f5ff] hover:bg-Main_Hv duration-700 font-Montserrat font-medium uppercase text-sm text-Main_Tx hover:text-white text-center cursor-pointer'>
                <li><NavLink className="flex items-center"><AiOutlineHome className='my-2 mr-5 text-2xl text-Main_Tx duration-500 group-hover:text-white' />Home</NavLink></li>
              </Link>
              <Link to='about' smooth={true} duration={500} className='group w-full py-4 px-6 border-b border-t border-solid border-[#eaeaea] bg-[#f7f5ff] hover:bg-Main_Hv duration-700 font-Montserrat font-medium uppercase text-sm text-Main_Tx hover:text-white text-center cursor-pointer'>
                <li><NavLink className="flex items-center"><LuCircleUser className='my-2 mr-5 text-2xl text-Main_Tx duration-500 group-hover:text-white' />About Me</NavLink></li>
              </Link>
              <Link to='resume' smooth={true} duration={500} className='group w-full py-4 px-6 border-b border-t border-solid border-[#eaeaea] bg-[#f7f5ff] hover:bg-Main_Hv duration-700 font-Montserrat font-medium uppercase text-sm text-Main_Tx hover:text-white text-center cursor-pointer'>
                <li><NavLink className="flex items-center"><FaRegAddressCard className='my-2 mr-5 text-2xl text-Main_Tx duration-500 group-hover:text-white' />Resume</NavLink></li>
              </Link>
              <Link to='service' smooth={true} duration={500} className='group w-full py-4 px-6 border-b border-t border-solid border-[#eaeaea] bg-[#f7f5ff] hover:bg-Main_Hv duration-700 font-Montserrat font-medium uppercase text-sm text-Main_Tx hover:text-white text-center cursor-pointer'>
                <li><NavLink className="flex items-center"><SlBriefcase className='my-2 mr-5 text-2xl text-Main_Tx duration-500 group-hover:text-white' />Services</NavLink></li>
              </Link>
              <Link to='portfolio' smooth={true} duration={500} className='group w-full py-4 px-6 border-b border-t border-solid border-[#eaeaea] bg-[#f7f5ff] hover:bg-Main_Hv duration-700 font-Montserrat font-medium uppercase text-sm text-Main_Tx hover:text-white text-center cursor-pointer'>
                <li><NavLink className="flex items-center"><VscFolderOpened className='my-2 mr-5 text-2xl text-Main_Tx duration-500 group-hover:text-white' />Portfolio</NavLink></li>
              </Link>
              <Link to='blog' smooth={true} duration={500} className='group w-full py-4 px-6 border-b border-t border-solid border-[#eaeaea] bg-[#f7f5ff] hover:bg-Main_Hv duration-700 font-Montserrat font-medium uppercase text-sm text-Main_Tx hover:text-white text-center cursor-pointer'>
                <li><NavLink className="flex items-center"><TfiWrite className='my-2 mr-5 text-2xl text-Main_Tx duration-500 group-hover:text-white' />Blogs</NavLink></li>
              </Link>
              <Link to='contact' smooth={true} duration={500} className='group w-full py-4 px-6 border-b border-t border-solid border-[#eaeaea] bg-[#f7f5ff] hover:bg-Main_Hv duration-700 font-Montserrat font-medium uppercase text-sm text-Main_Tx hover:text-white text-center cursor-pointer'>
                <li><NavLink className="flex items-center"><LuContact className='my-2 mr-5 text-2xl text-Main_Tx duration-500 group-hover:text-white' />Contact</NavLink></li>
              </Link>
            </ul>
          <div className="lg:hidden mr-2 text-2xl text-white cursor-pointer" onClick={()=>{setShow(!show)}}>
            { show == true ? <RxCross2 /> : <FaBars /> }
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar