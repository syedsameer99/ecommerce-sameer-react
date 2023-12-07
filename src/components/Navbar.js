import React from "react";
import logoIcon4 from "../icons/navbar/logo4.png";

const Navbar = () => {
  return (
    <div className="border shadow-md flex items-center p-4 justify-between px-8 py-5">
      <div className="flex items-center">
        <img src={logoIcon4} width="25px" className="pt-1" />
        <p className="text-[23px] tracking-widest leading-3 pl-2 font-semibold">
          NEXT STOREFRONT
        </p>
      </div>
      <img src={logoIcon4} width="25px" className="pt-1" />
    </div>
  );
};

export default Navbar;
