import React from "react";
import MarginL from "../layer/MarginL";
import Container from "../layer/Container";
import MarginX from "../layer/MarginX";

import HeaderReusable from "../reusable/HeaderReusable";
import AboutReusable from "../reusable/AboutReusable";

import { LuMapPin, LuPhoneCall, LuClock3 } from "react-icons/lu";
import { BsEnvelopeAt, BsGlobe2 } from "react-icons/bs";

import { HiArrowLongRight } from "react-icons/hi2";

import { SlLayers } from "react-icons/sl";
import { PiUsers } from "react-icons/pi";
import { GoTrophy } from "react-icons/go";

import cv from "../assets/parvez.pdf";

const About = () => {
  return (
    <section id="about">
      <MarginL>
        <Container>
          <MarginX className="mt-24">
            <HeaderReusable spanTx="About" h2_Tx="Me" />
            <div className="my-20 xl:flex xl:items-center">
              <div className="xl:w-1/2 xl:mb-0 mb-8">
                <div className=" relative z-0 before:absolute before:content[''] before:bottom-0 before:left-0 xl:before:w-[36%] lgx:before:w-[22%] lg:before:w-[28%] md:before:w-[28%] sm:before:w-[28%] before:w-[50%] before:h-[96%] before:bg-Main before:-z-10 ">
                  <img className="w-fit" src="https://i.postimg.cc/P5SPK5HQ/Mob-menu.png" alt="About Image"/>
                </div>
              </div>
              <div className="xl:w-1/2">
                <div>
                  <h3 className="mb-1.5 font-Montserrat font-semibold uppercase text-[28px] text-Main_Tx leading-10 tracking-widest opacity-90">MH Parvez</h3>
                  <h4 className="mb-5 font-Montserrat font-medium text-lg text-Main_Tx leading-5 opacity-90">Frontend Developer{" "}
                    <span className="ml-3 inline-block h-px w-11.25 bg-[#b7b7b7] relative -top-1 left-2.5"></span>
                  </h4>
                  <p className="font-Montserrat font-normal text-base text-Main_Tx leading-7.5 tracking-wider">
                    A React and Next.js developer with 2 years of experience building scalable front-end applications. My core skills include component based architecture, state management, and leveraging Next.js features like SSR and SSG for optimal performance. I am adept at integrating with back-end services and ensuring a seamless user experience. I am a quick learner, committed to best practices and contributing effectively to development teams.
                  </p>
                  <ul className="mt-7.5 mb-10 sm:flex sm:flex-wrap">
                    <li className="sm:w-1/2 w-full py-3">
                      <a href="#" className="flex items-center font-Space font-semibold text-base text-Main_Tx opacity-90">
                        <LuMapPin className="w-14 h-12 mr-2 bg-[#f7f5ff] p-3 rounded-[5px]" />
                        South Keranigonj, Dhaka
                      </a>
                    </li>
                    <li className="sm:w-1/2 w-full py-3">
                      <a href="tel:+880 969-6365626" className="flex items-center font-Space font-semibold text-base text-Main_Tx opacity-90">
                        <LuPhoneCall className="w-14 h-12 mr-2 bg-[#f7f5ff] p-3 rounded-[5px]" />
                        +880 9696-365626
                      </a>
                    </li>
                    <li className="sm:w-1/2 w-full py-3">
                      <a href="mailto:parvez.devp@gmail.com" className="flex items-center font-Space font-semibold text-base text-Main_Tx opacity-90">
                        <BsEnvelopeAt className="w-14 h-12 mr-2 bg-[#f7f5ff] p-3 rounded-[5px]" />
                        parvez.devp@gmail.com
                      </a>
                    </li>
                    <li className="sm:w-1/2 w-full py-3">
                      <a href="https://portfolio-pz.netlify.app/" target="blank" className="flex items-center font-Space font-semibold text-base text-Main_Tx opacity-90">
                        <BsGlobe2 className="w-14 h-12 mr-2 bg-[#f7f5ff] p-3 rounded-[5px]" />
                        www.portfolio-pz.netlify.app
                      </a>
                    </li>
                  </ul>
                  <ul className="flex justify-start">
                    <li>
                      <a href={cv} download className='py-4 px-8 max-xsl:py-2.5 max-xsl:px-4 bg-Main hover:bg-Main_Hv font-Montserrat font-medium uppercase text-base max-xsl:text-sm text-white duration-500 flex items-center relative mb-1.75 mr-1.75 border-solid border border-Main z-10 before:absolute before:content[""] before:w-full before:h-full before:border-solid before:border before:border-Main hover:before:border-Main_Hv before:top-1.75 hover:before:top-0 before:left-1.75 hover:before:left-0 before:z-0 before:duration-500 '>
                        Download CV{" "}
                        <HiArrowLongRight className="ml-2 text-xl" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap xl:gap-4 lg:gap-8.25 md:gap-7.25 sm:gap-6">
              <AboutReusable iconLink={<SlLayers />} number="07" text="Projects done"/>
              <AboutReusable iconLink={<PiUsers />} number="15" text="Happy Customers"/>
              <AboutReusable iconLink={<LuClock3 />} number="759" text="Working Hours"/>
              <AboutReusable iconLink={<GoTrophy />} number="04" text="Awards winning"/>
            </div>
          </MarginX>
        </Container>
      </MarginL>
    </section>
  );
};

export default About;