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
import { Link, NavLink } from 'react-router';

import NavReusable from '../reusable/NavReusable';

const Navbar = () => {

  let [show, setShow] = useState(false)

  return (
    <>
      <div className=" fixed left-0 top-0 z-10 bg-[#f7f5ff]">
        <div className="lg:block hidden">
          <div className="w-[110px] h-[84px] bg-Main flex justify-center items-center">
            <Link to="/">
              <h2 className='font-Montserrat font-bold lgx:text-[52px] leading-[72px] text-[56px] text-white text-center'>Pz</h2>
            </Link>
          </div>
            <ul>
              <NavReusable to="/" name="Home" icon={AiOutlineHome} />
              <NavReusable to="/about" name="About Me" icon={LuCircleUser}/>
              <NavReusable to="/resume" name="Resume" icon={FaRegAddressCard}/>
              <NavReusable to="/service" name="Service" icon={SlBriefcase}/>
              <NavReusable to="/portfolio" name="Portfolio" icon={VscFolderOpened}/>
              <NavReusable to="/blog" name="Blogs" icon={TfiWrite}/>
              <NavReusable to="/contact" name="Contact" icon={LuContact}/>
            </ul>
          {/* <div className="">
            <button className='w-[110px] h-[220px] bg-Main flex justify-center items-center'><span className='rotate-90 font-Montserrat font-medium uppercase text-[14px] text-white relative after:absolute after:content[""] after:right-[-24px] after:top-[-2px] after:w-[1px] after:h-[25px] after:bg-white after:rotate-90'>Contact me</span></button>
          </div> */}
        </div>
      </div>

      {/* Mobile Navbar Part Start Here */}

      <div className="lg:hidden bg-[#3e4041] ">
        <div className="flex justify-between items-center">
          <div className="w-[64px] h-[62px] bg-Main flex justify-center">
            <Link to="/">
              <h2 className='font-Montserrat font-bold text-[41px] text-white text-center'>Pz</h2>
            </Link>
          </div>
            <ul className={ `absolute ${show == true ? 'top-0 left-0 md:w-2/5 sm:w-2/5 w-2/3 max-[350px]:w-4/5 z-10 bg-[#f7f5ff] duration-700' : 'top-0 left-[-100%] w-1/2 duration-700' } ` }>
              <div className="mb-5 pt-[32px] px-[12px] text-center">
                  <div className="w-[84px] h-[104px] mx-auto mb-[10px] ">
                    <img className='w-full rounded-full border-2 border-solid border-Main_Hv' src="https://i.postimg.cc/P5SPK5HQ/Mob-menu.png" alt="Mobile menu Image" />
                  </div>
                  <h3 className='font-playFair font-semibold text-[26px] text-[#292929c5] duration-500 mb-[5px]'>I'm <span className=''>Parvez</span></h3>
                  <span className=" font-Montserrat font-normal text-[16px] text-[#7a7a7a] tracking-wider">
                    <Typewriter
                      words={['A Frontend Developer', 'I Develop with ReactJS']}
                      loop={5}
                      cursor
                      cursorStyle='_'
                      typeSpeed={300}
                      deleteSpeed={200}
                      delaySpeed={1000}
                    />
                  </span>
              </div>
              <li><NavLink to='/' className='group w-full flex items-center py-4 px-6 border-b border-t border-solid border-[#eaeaea] bg-[#f7f5ff] hover:bg-Main_Hv duration-700 font-Montserrat font-medium uppercase text-sm text-Main_Tx hover:text-white text-center cursor-pointer'><AiOutlineHome className='my-2 mr-5 text-2xl text-Main_Tx duration-500 group-hover:text-white' />Home</NavLink></li>
              <li><NavLink to='/about' className='group w-full flex items-center py-4 px-6 border-b border-solid border-[#eaeaea] bg-[#f7f5ff] hover:bg-Main_Hv duration-700 font-Montserrat font-medium uppercase text-sm text-Main_Tx hover:text-white text-center cursor-pointer'><LuCircleUser className='my-2 mr-5 text-2xl text-Main_Tx duration-500 group-hover:text-white' />About Me</NavLink></li>
              <li><NavLink to='/resume' className='group w-full flex items-center py-4 px-6 border-b border-solid border-[#eaeaea] bg-[#f7f5ff] hover:bg-Main_Hv duration-700 font-Montserrat font-medium uppercase text-sm text-Main_Tx hover:text-white text-center cursor-pointer'><FaRegAddressCard className='my-2 mr-5 text-2xl text-Main_Tx duration-500 group-hover:text-white' />Resume</NavLink></li>
              <li><NavLink to='/service' className='group w-full flex items-center py-4 px-6 border-b border-solid border-[#eaeaea] bg-[#f7f5ff] hover:bg-Main_Hv duration-700 font-Montserrat font-medium uppercase text-sm text-Main_Tx hover:text-white text-center cursor-pointer'><SlBriefcase className='my-2 mr-5 text-2xl text-Main_Tx duration-500 group-hover:text-white' />Services</NavLink></li>
              <li><NavLink to='/portfolio' className='group w-full flex items-center py-4 px-6 border-b border-solid border-[#eaeaea] bg-[#f7f5ff] hover:bg-Main_Hv duration-700 font-Montserrat font-medium uppercase text-sm text-Main_Tx hover:text-white text-center cursor-pointer'><VscFolderOpened className='my-2 mr-5 text-2xl text-Main_Tx duration-500 group-hover:text-white' />Portfolio</NavLink></li>
              <li><NavLink to='/blog' className='group w-full flex items-center py-4 px-6 border-b border-solid border-[#eaeaea] bg-[#f7f5ff] hover:bg-Main_Hv duration-700 font-Montserrat font-medium uppercase text-sm text-Main_Tx hover:text-white text-center cursor-pointer'><TfiWrite className='my-2 mr-5 text-2xl text-Main_Tx duration-500 group-hover:text-white' />Blog</NavLink></li>
              <li><NavLink to='/contact' className='group w-full flex items-center py-4 px-6 border-b border-solid border-[#eaeaea] bg-[#f7f5ff] hover:bg-Main_Hv duration-700 font-Montserrat font-medium uppercase text-sm text-Main_Tx hover:text-white text-center cursor-pointer'><LuContact className='my-2 mr-5 text-2xl text-Main_Tx duration-500 group-hover:text-white' />Contact</NavLink></li>
            </ul>
          <div className="lg:hidden mr-2 text-[24px] text-white cursor-pointer" onClick={()=>{setShow(!show)}}>
            { show == true ? <RxCross2 /> : <FaBars /> }
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar