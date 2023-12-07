import React from "react";
import logoIcon from "../icons/navbar/logoo.svg";

const Navbar = () => {
  return (
    <div className="border shadow-md flex items-center p-4 justify-between px-8 py-5">
      <div className="flex items-center">
        <img src={logoIcon} width="25px" className="pt-1" alt="logo" />
        <p className="text-[23px] tracking-widest leading-3 pl-2 font-semibold">
          NEXT STOREFRONT
        </p>
      </div>
      <img src={logoIcon} width="25px" className="pt-1" alt="logo" />
    </div>
  );
};

export default Navbar;
