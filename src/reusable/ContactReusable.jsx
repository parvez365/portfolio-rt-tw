import React from "react";

const ContactReusable = ({ iconLink, link, title, prg }) => {
  return (
      <li className="xl:w-[47.7%] w-full md:my-0 sm:my-3 my-4 py-8 xl:px-[11px] lg:px-[36px] sm:px-[16px] border border-solid border-[#eaeaea] rounded-[8px] text-center group hover:shadow-SDW_2 duration-500">
        <div className="xl:block sm:flex sm:items-center sm:justify-start">
          <div className="w-16 h-14 xl:mx-auto sm:mx-0 mx-auto p-3 relative before:absolute before:content[''] before:top-0 before:left-0 before:w-[50%] before:h-full before:rounded-s-[5px] before:bg-[#f4f4f4] before:duration-500 before:-z-10 group-hover:before:w-full group-hover:before:rounded-e-[5px]">
            <a href={link} >
              <div className="text-[30px]">{iconLink}</div>
            </a>
          </div>
          <div className="xl:mt-4 xl:ml-0 sm:ml-2 sm:mt-0 mt-3 xl:text-center sm:text-start text-center">
            <h3 className="xl:mb-2 mb-1 font-Montserrat font-semibold text-[16px] text-Main_Tx uppercase">
              {title}
            </h3>
            <a href={link} className="font-Space font-normal text-base text-Main_Tx opacity-90">
              {prg}
            </a>
          </div>
        </div>
      </li>
  );
};

export default ContactReusable;
