import React from 'react';
import MarginL from '../layer/MarginL';
import Container from '../layer/Container';
import MarginX from '../layer/MarginX';

import HeaderReusable from '../reusable/HeaderReusable';
import ContactReusable from '../reusable/ContactReusable';

import { HiArrowLongRight } from "react-icons/hi2";

import { LuMapPin, LuPhoneCall } from "react-icons/lu";
import { BsEnvelopeAt, BsGlobe2 } from "react-icons/bs";

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact">
        <MarginL>
            <Container>
                <MarginX>
                    <HeaderReusable spanTx="Contact" h2_Tx="Me"/>
                    <div className="my-20 sm:flex">
                        <div className="sm:w-1/2 w-full lg:mr-8 md:mr-6 sm:mr-4">
                            <div className="mb-14">
                                <div className="pb-1.5 border-b border-solid border-[#eaeaea]">
                                    <input type="text" className='w-full font-Montserrat font-medium text-[17px] text-Main_Tx' placeholder='Full Name' />
                                </div>
                            </div>
                            <div className="mb-14">
                                <div className="pb-1.5 border-b border-solid border-[#eaeaea]">
                                    <input type="email" className='w-full font-Montserrat font-medium text-[17px] text-Main_Tx' placeholder='Email Address' />
                                </div>
                            </div>
                            <div className="mb-14">
                                <div className="pb-1.5 border-b border-solid border-[#eaeaea]">
                                    <input type="text" className='w-full font-Montserrat font-medium text-[17px] text-Main_Tx' placeholder='Your Subject' />
                                </div>
                            </div>
                            <div className="mb-16">
                                <div className="pb-1.5 border-b border-solid border-[#eaeaea]">
                                    <input type="text" className='w-full pb-25 font-Montserrat font-medium text-[17px] text-Main_Tx' placeholder='Your Massage' />
                                </div>
                            </div>
                            <ul className='flex justify-start'>
                                <li><button className='py-4 px-8 bg-Main hover:bg-Main_Hv font-Montserrat font-semibold uppercase text-base text-white duration-500 flex items-center relative mb-1.75 mr-1.75 border-solid border border-Main z-10 before:absolute before:content[""] before:w-full before:h-full before:border-solid before:border before:border-Main hover:before:border-Main_Hv before:top-1.75 hover:before:top-0 before:left-1.75 hover:before:left-0 before:z-0 before:duration-500 '>Submit Now <HiArrowLongRight className='ml-2 font-semibold text-lg' /></button></li>
                            </ul>
                        </div>
                        <div className="sm:w-1/2 w-full lg:ml-8 md:ml-6 sm:ml-4">
                            <ul className='xl:my-10 my-0 md:flex md:flex-wrap xl:gap-6 lg:gap-4 md:gap-6 sm:gap-4'>
                                <ContactReusable iconLink={<LuMapPin/>} title="My Location" prg="South Keranigonj, Dhaka"/>
                                <ContactReusable iconLink={<BsEnvelopeAt/>} link="mailto:parvez.devp@gmail.com" title="Email Address" prg="parvez.devp@gmail.com"/>
                                <ContactReusable iconLink={<LuPhoneCall/>} link="tel:+8809696365626" title="Phone Number" prg="+880 9696-365626"/>
                                <ContactReusable iconLink={<BsGlobe2/>} link="https://portfolio-pz.netlify.app/" title="Website" prg="www.portfolio-pz.netlify.app"/>
                            </ul>
                        </div>
                    </div>
                </MarginX>
                <div className="py-6 bg-[#222]">
                    <MarginX>
                        <div className="sm:flex sm:justify-between sm:items-center">
                            <div className="lg:w-2/5 sm:w-3/5 w-full">
                                <div className="sm:flex sm:justify-start sm:items-center flex justify-center">
                                    <p className='font-Montserrat font-medium text-base text-white text-center capitalize tracking-wide opacity-90'>Copyright @ 2025, <span>All right reserved</span></p> 
                                </div>
                            </div>
                            <div className="sm:w-1/5 w-full sm:mt-0 mt-4 ">
                                <ul className='sm:flex sm:justify-end flex justify-center'>
                                    <li className='ml-6'><a href="https://x.com/prvz_dvp" target='blank'><FaTwitter className='text-[18px] text-white opacity-90' /></a></li>
                                    <li className='ml-6'><a href="https://www.facebook.com/prvz.devp" target='blank'><FaFacebookF className='text-[18px] text-white opacity-90' /></a></li>
                                    <li className='ml-6'><a href="https://www.linkedin.com/in/prvz-devp" target='blank'><FaLinkedinIn className='text-[18px] text-white opacity-90' /></a></li>
                                    <li className='ml-6'><a href="#"><FaYoutube className='text-[18px] text-white opacity-90' /></a></li>
                                </ul>
                            </div>
                        </div>
                    </MarginX>
                </div>
            </Container>
        </MarginL>
    </div>
  )
}

export default Contact