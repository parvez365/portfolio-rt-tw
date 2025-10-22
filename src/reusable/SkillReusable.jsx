import React from "react";
import SkillProgressProvider from "../components/SkillProgressProvider";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const SkillReusable = ({ imageLink, number, text }) => {
  return (
    <>
      <div className="lg:w-[23.9%] lg:h-69.5 md:w-[23.3%] md:h-42.5 sm:w-[23%] sm:h-36 max-[450px]:w-[47.5%] max-xsl:w-[47%] max-[450px]:h-43.75 max-[399px]:h-40 max-xsl:h-32.5 relative">
        <div className="w-full h-full relative">
          <SkillProgressProvider values={[1, number]}>
            {(percentage) => (
              <CircularProgressbar value={percentage} text={`${number}%`}
                styles={buildStyles({
                    
                })}
                className="text-Main_Tx absolute top-0 left-0 bg-[#ffffffe1] rounded-full z-10"
              />
            )}
          </SkillProgressProvider>
          <div className="absolute top-0 left-0 z-0">
            <img src={imageLink} alt="Skill Image 01"
              className="lg:h-69 md:h-42.25 sm:h-35.5 max-[450px]:h-38.5 max-xsl:h-32.5 rounded-full"
            />
          </div>
          <div className="absolute top-0 left-0 w-full h-25 text-center xl:mt-43 lgx:mt-36 lg:mt-30 md:mt-25 sm:mt-20 mt-26.25 max-[400px]:mt-23 max-xsl:mt-18.75 z-20">
            <h3 className="font-Montserrat font-normal lg:text-xl md:text-base sm:text-sm max-xsl:text-base leading-7 uppercase text-Main_Tx">{text}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillReusable;
