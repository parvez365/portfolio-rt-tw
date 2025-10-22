import React from "react";

const BlogsReusable = ({ image, date, hadingTx, para }) => {
  return (
      <div className="lg:flex items-center lg:pt-10 pt-12 group">
        <div className="xl:w-2/5 w-full">
          <div className="w-full overflow-hidden rounded-[10px]">
            <a className="inline" href="#">
              <img className="group-hover:scale-110 duration-700" src={image} alt=""/>
            </a>
          </div>
        </div>
        <div className="xl:w-3/5 w-full">
          <div className="xl:ml-12 lg:ml-6 lg:mt-0 mt-6">
            <div className="">
              <h5 className="font-Montserrat font-normal uppercase text-lg text-Main_Tx">
                {date}
              </h5>
            </div>
            <div className="mt-3 xl:mb-5 mb-4">
              <a href="#">
                <h3 className='xl:mb-4 mb-3 font-Montserrat font-bold xl:text-[17px] lg:text-lg xl:leading-8 leading-7 opacity-90 text-Main_Tx uppercase relative after:absolute after:content-[""] after:left-0 after:bottom-0 after:w-0 after:h-px after:bg-Main_Tx after:duration-700 after:opacity-0 hover:after:opacity-100 hover:after:w-full'>
                  {hadingTx}
                </h3>
              </a>
              <p className="font-Montserrat font-normal capitalize text-base leading-7 text-Main_Tx opacity-90">
                {para}
              </p>
            </div>
            <div className="">
              <button className='py-3 px-5 font-Montserrat font-semibold text-base text-Main_Tx duration-500 relative before:absolute before:content[""] before:top-0 before:left-0 before:w-[30%] before:h-full before:rounded-s-[5px] before:bg-[#f4f4f4] before:duration-500 before:-z-10 group-hover:before:w-full group-hover:before:rounded-e-[5px]'>
                Continue Read
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default BlogsReusable;
