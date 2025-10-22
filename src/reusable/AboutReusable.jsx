import React, { useEffect, useState } from "react";
import CountUp from "react-countup";

const AboutReusable = ({ iconLink, number, text }) => {
  let [condition, setCondition] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 1090) {
        setCondition(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="lg:w-[23.9%] sm:w-[48%] w-full sm:mb-0 mb-4 xl:text-start text-center border border-solid border-[#eaeaea] p-8 rounded-2xl hover:shadow-SDW_2 duration-500">
        <div className="mb-2.5 flex xl:justify-start justify-center items-center">
          <div className="text-[32px]">{iconLink}</div>
        </div>
        <CountUp start={0} end={`${condition ? number : 0}`} duration={5}
          className="font-Montserrat font-semibold text-4xl text-Main_Tx opacity-95"
        >
        </CountUp>
        <p className="font-Montserrat font-semibold text-base leading-7 uppercase text-Main_Tx opacity-90">{text}</p>
      </div>
    </>
  );
};

export default AboutReusable;
