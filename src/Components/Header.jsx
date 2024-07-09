import React, { useState } from "react";
import logo from "./../assets/images/logo.svg";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";
function Header() {
    const [toggle,setToggle]=React.useState(false);
    const menu = [
    { name: "Home", icon: HiHome },
    { name: "Search", icon: HiMagnifyingGlass },
    { name: "Watch List", icon: HiPlus },
    { name: "Originals", icon: HiStar },
    { name: "Movies", icon: HiPlayCircle },
    { name: "Series", icon: HiTv }
    ,
  ];
  return (
    <div className="flex items-center p-5 justify-between">
      <div className="flex items-center gap-8 ">
        <img
          src={logo} className="w-[80px] md:w-[120px] object-cover"
          alt="Disney logo"
        />
        <div className="hidden md:flex gap-8">
        {menu.map((item) => (
          <HeaderItem name={item.name} Icon={item.icon} />
        ))}
        </div>

        {/* mobile menu */}
        <div className="flex md:hidden gap-5">
            {/* Index to hide some icons in mobile menu */}
        {menu.map((item,index) =>index<3&& (
          <HeaderItem name={''} Icon={item.icon} />
        ))}
        </div>
        {/* use this to add one more icon or hamburger menu */}
        <div className=" md:hidden" onClick={()=>setToggle(!toggle)}>
            {/* Make sure icon is imported at the top */}
          <HeaderItem name={''} Icon={HiDotsVertical} />
          {/* Drop down menu */}
        {toggle? 
          <div className="absolute top-16 mt-3 bg-[#181818] p-3 border-gray-600 border-[1px] rounded w-[30%] ">
                 {/* Index>2 to show the remaining icons */}
        {menu.map((item,index) =>index>2&& (
            
          <HeaderItem name={item.name} Icon={item.icon} />
        ))}
          </div>:null}

        </div>

      </div>
      <img
        src="https://img.freepik.com/premium-vector/student-avatar-illustration-user-profile-icon-youth-avatar_118339-4395.jpg"
        alt="profile" className="w-[48px] h-[48px] rounded-full"
      />
    </div>
  );
}

export default Header;
