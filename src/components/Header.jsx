import React from "react";
import HeartBrokenOutlinedIcon from "@mui/icons-material/HeartBrokenOutlined";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

function Header() {
  return (
    <>
      <div className=" flex justify-evenly items-center bg-blue-500 text-white h-10">
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
      </div>

      <div className="flex items-center justify-stretch h-16">
        <div className="w-20 border border-t-0 border-l-0 h-full flex justify-center items-center font-thin bg-blue-500 text-white">
          <span>ICON</span>
        </div>
        <div className="w-20 border border-l-0 h-full flex justify-center items-center font-thin">
          <button>MAN</button>
        </div>
        <div className="w-20 border h-full flex justify-center items-center font-thin">
          <button>WOMAN</button>
        </div>
        <div className="w-20 border h-full flex justify-center items-center font-thin">
          <button>KIDS</button>
        </div>
        <div className=" grow border flex justify-center items-center h-full">
          <span className=" ">LOGO</span>
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
      </div>
    </>
  );
}

export default Header;
