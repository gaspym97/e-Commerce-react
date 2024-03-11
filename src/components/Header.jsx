import React from "react";
import HeartBrokenOutlinedIcon from "@mui/icons-material/HeartBrokenOutlined";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";

function Header() {
  return (
    <>
      <nav className="hidden md:flex justify-between items-center bg-blue-500 text-white h-10 mx-auto">
        <button className="text-xs h-full hover:bg-blue-600 text-white flex-1">
          <HeartBrokenOutlinedIcon /> Help Center
        </button>
        <button className="text-xs h-full hover:bg-blue-600 text-white flex-1">
          <ShoppingCartOutlinedIcon /> Shipping & Returns
        </button>
        <button className="text-xs h-full hover:bg-blue-600 text-white flex-1">
          <CardGiftcardOutlinedIcon /> Gift Cards
        </button>
        <button className="text-xs h-full hover:bg-blue-600 text-white flex-1">
          <MapOutlinedIcon /> Store Locator
        </button>
      </nav>

      <div className="flex items-center justify-stretch h-16">
        <div className="hidden w-20 border border-t-0 border-l-0 h-full md:flex justify-center items-center font-thin bg-blue-500 text-white px-2">
          <span>ICON</span>
        </div>
        <div className="hidden w-20 border border-l-0 h-full md:flex justify-center items-center font-thin px-2">
          <button>MAN</button>
        </div>
        <div className="hidden w-20 border h-full md:flex justify-center items-center font-thin px-2">
          <button>WOMAN</button>
        </div>
        <div className="hidden w-20 border h-full md:flex justify-center items-center font-thin px-2">
          <button>KIDS</button>
        </div>
        <div className=" grow w-full border flex justify-center items-center h-full">
          <span className="">LOGO</span>
        </div>
        <div className="w-20 border h-full flex justify-center items-center font-thin">
          <PersonOutlineOutlinedIcon />
        </div>
        <div className="w-20 border h-full flex justify-center items-center font-thin">
          <SearchOutlinedIcon />
        </div>
        <div className="w-20 border h-full flex justify-center items-center font-thin">
          <ShoppingCartOutlinedIcon />
        </div>
        <div className="md:hidden w-20 h-full flex justify-center items-center">
          <DensityMediumIcon />
        </div>
      </div>
    </>
  );
}

export default Header;
