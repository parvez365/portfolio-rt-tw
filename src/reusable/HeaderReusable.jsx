import React from "react";

const HeaderReusable = ({ spanTx, h2_Tx }) => {
  return (
    <>
      <div className="relative z-0 before:absolute before:content[''] before:top-[54%] before:right-0 before:w-full before:h-px before:bg-[#eaeaea] before:-z-10 after:absolute after:content[''] after:top-[54%] after:right-0 after:w-15 after:h-px after:bg-Main after:z-10 ">
        <h2 className="pr-4.5 bg-white inline-block font-play-fair font-bold xl:text-[66px] lg:text-6xl text-4xl max-xsl:text-[28px] text-Main_Tx duration-500">
          <span className='relative z-0 before:absolute before:content[""] lg:before:bottom-2 before:bottom-1 before:left-0 before:w-full lg:before:h-2.5 before:h-1.5 before:bg-[#b7b7b7] before:rounded-lg before:-z-10'>{spanTx}</span>{" "}
          {h2_Tx}
        </h2>
      </div>
    </>
  );
};

export default HeaderReusable;
