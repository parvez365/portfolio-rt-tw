import React from "react";
import MarginL from "../layer/MarginL";
import Container from "../layer/Container";
import MarginX from "../layer/MarginX";

import { Typewriter } from "react-simple-typewriter";
import { HiArrowLongRight } from "react-icons/hi2";

import own from "../assets/prvz-hero.png";

const Hero = () => {
  return (
    <section  id="hero">
      <MarginL className="relative bg-[#f4f4f4] lg:h-screen lg:pt-0 pt-16">
        <div className="bg-[url('../src/assets/bg01.png'),url('../src/assets/bg02.png')] bg-no-repeat bg-center bg-cover">
          <Container>
            <MarginX className="lg:h-screen lg:flex lg:items-center">
              <div className="lg:w-2/5 lg:text-left text-center lg:mb-0 mb-10">
                <h2 className="font-play-fair font-black lg:text-6xl text-5xl max-xsl:text-[40px] text-Main_Hv mb-1">
                  Hello
                </h2>
                <h1 className="font-play-fair font-bold xl:text-[84px] lg:text-6xl text-5xl max-xsl:text-[40px] text-Main_Hv duration-500 mb-4">
                  I'm{" "}
                  <span className='relative z-0 before:absolute before:content[""] lg:before:bottom-3 before:bottom-2 before:left-0 before:w-full before:h-2.5 before:bg-[#b7b7b7] before:rounded-lg before:-z-10'>Parvez</span>
                </h1>
                <span className=" font-Space font-medium lg:text-xl sm:text-[22px] text-Main tracking-wider">
                  <Typewriter
                    words={[
                      "A Frontend Developer",
                      "I Develop using ReactJS & NextJS",
                      "I Develop using Tailwind CSS",
                    ]}
                    loop={5}
                    cursor
                    cursorStyle="|"
                    typeSpeed={300}
                    deleteSpeed={200}
                    delaySpeed={2000}
                  />
                </span>
                <ul className="lg:mt-16 lg:flex lg:justify-start hidden">
                  <li>
                    <a
                      href="https://github.com/parvez365" target="blank"
                      className='py-4 px-8 bg-Main hover:bg-Main_Hv font-Montserrat font-medium uppercase text-base text-white duration-500 flex items-center relative mb-1.75 mr-1.75 border-solid border border-Main z-10 before:absolute before:content[""] before:w-full before:h-full before:border-solid before:border before:border-Main hover:before:border-Main_Hv before:top-1.75 hover:before:top-0 before:left-1.75 hover:before:left-0 before:z-0 before:duration-500 '
                    >
                      Github Link{" "}
                      <HiArrowLongRight className="ml-2 text-xl" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="lg:w-3/5">
                <div className="w-full xl:h-screen flex items-center">
                  <img
                    className="w-full xl:pr-6 lg:pr-8"
                    src={own} alt="Own Image"/>
                </div>
              </div>
            </MarginX>
            <div className="lg:block hidden lg:mx-6 mx-0">
              <div className="h-1/2 absolute content[''] right-0 xl:top-[25%] lg:top-[28%]">
                <div className="h-full flex flex-col justify-around items-center">
                  <div className="">
                    <a
                      href="https://www.facebook.com/prvz365" target="blank"
                      className="rotate-90 font-Montserrat font-bold text-base uppercase text-Main_Tx hover:text-black"
                    >
                      {" "}
                      Facebook{" "}
                    </a>
                  </div>
                  <div className="">
                    <a
                      href="https://x.com/prvz365" target="blank"
                      className="rotate-90  font-Montserrat font-bold text-base uppercase text-Main_Tx hover:text-black"
                    >
                      {" "}
                      Twitter{" "}
                    </a>
                  </div>
                  <div className="">
                    <a
                      href="https://www.linkedin.com/in/prvz365" target="blank"
                      className=" rotate-90 font-Montserrat font-bold text-base uppercase text-Main_Tx hover:text-black"
                    >
                      {" "}
                      Linkedin{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </MarginL>
    </section>
  );
};

export default Hero;
