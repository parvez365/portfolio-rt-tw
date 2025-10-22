import React from "react";

const ResumeCenReusable = ({ numberTx, headerTx, text }) => {
  return (
    <>
      <div className="xl:w-85 py-12 relative after:content[''] after:absolute lgx:after:top-59.5 md:after:top-60 sm:after:top-58 after:top-54 max-xsl:after:top-60 after:left-[50%] after:h-12 after:border after:border-dashed after:border-[#989898] before:content[''] before:absolute before:top-0 before:left-[50%] before:h-12 before:border before:border-dashed before:z-50 before:border-[#989898]">
        <div className="md:p-6 sm:p-8 p-3 sm:text-start text-center border border-solid border-[#eaeaea] rounded-xl">
          <h4 className="font-Montserrat font-medium text-base text-[#908e9b]">{numberTx}</h4>
          <h3 className="mt-3 mb-2 font-Montserrat font-semibold text-lg uppercase text-Main_Tx">{headerTx}</h3>
          <p className="font-Montserrat font-normal text-base text-[#908e9b]">{text}</p>
        </div>
      </div>
    </>
  );
};

export default ResumeCenReusable;
