import React from "react";

const ResumeReusable = ({ numberTx, headerTx, text }) => {
  return (
    <>
      <div className="xl:w-85">
        <div className="md:p-6 sm:p-8 p-3 sm:text-start text-center border border-solid border-[#eaeaea] rounded-xl">
          <h4 className="font-Montserrat font-medium text-base text-[#908e9b]">{numberTx}</h4>
          <h3 className="mt-3 mb-2 font-Montserrat font-semibold text-[17px] uppercase text-Main_Tx">{headerTx}</h3>
          <p className="font-Montserrat font-normal text-base text-[#908e9b]">{text}</p>
        </div>
      </div>
    </>
  );
};

export default ResumeReusable;
