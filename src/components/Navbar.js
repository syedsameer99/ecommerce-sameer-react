import React from "react";
import logoIcon from "../assets/icons/navbar/logo.svg";

const Navbar = () => {
  return (
    <div className="border shadow-md flex items-center p-4 justify-between  flex-wrap px-8 py-5">
      <div className="flex items-center">
        <img src={logoIcon} width="25px" alt="logo" />
        <p className="text-[18px] sm:text-[23px] tracking-widest leading-3 pl-2 font-semibold">
          NEXT STOREFRONT
        </p>
      </div>
      <img src={logoIcon} width="25px" className="pt-1" alt="logo" />
    </div>
  );
};

export default Navbar;
