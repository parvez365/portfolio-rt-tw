import React from "react";
import { NavLink } from "react-router";

const NavReusable = ({ name, icon: Icon }) => {
  return (
    <>
      <li className="border-b border-solid border-[#eaeaea] hover:bg-Main_Hv duration-700">
        <NavLink
          className="group px-2 py-2.5 bg-[#f7f5ff] hover:bg-Main_Hv duration-700 font-Montserrat font-medium uppercase text-sm !text-Main_Tx hover:!text-white text-center cursor-pointer"
        >
          {Icon && (
            <Icon className="my-1.75 mx-8 lgx:text-2xl text-[28px] text-Main_Tx duration-500 group-hover:text-white" />
          )}
          {name}
        </NavLink>
      </li>
    </>
  );
};

export default NavReusable;
