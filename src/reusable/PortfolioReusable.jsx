import React from "react";

const PortfolioReusable = ({ imageLink, projectLink }) => {
  return (
      <div className="xl:w-[31.9%] lg:w-[32.7%] sm:w-[49%] w-[48%] group relative">
        <div className="">
          <img className="w-full rounded-3xl" src={imageLink} alt="" />
        </div>
        <div className="absolute top-0 left-0 rounded-l-3xl duration-500 group-hover:w-[20%] group-hover:h-full group-hover:bg-[#e2e2e2]">
          <div className="flex items-center justify-center h-full -rotate-90">
            <a className="font-Montserrat font-bold text-base uppercase text-Main_Tx opacity-0 group-hover:opacity-100"
               href={projectLink} target="blank">
                Project_Link
            </a>
          </div>
        </div>
        <div className="absolute top-5 right-2.5">
          <img className="w-14" src="https://i.postimg.cc/TYsdCmJ4/photo-2.png" alt=""/>
        </div>
      </div>
  );
};

export default PortfolioReusable;
