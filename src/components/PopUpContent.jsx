import React from "react";
import img from "../assets/images/image.png";
import background from "../assets/images/letter-background.jpg";
import { FaHeart } from "react-icons/fa";
import cakegif from "../assets/images/cake.gif";

const PopUpContent = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5">
      <div>
        <img src={img} alt="" className="w-full h-auto" />
      </div>

      <div className="text-[#000035] rounded-lg p-4 flex items-center justify-items-center gap-2">
        <p className="text-sm md:text-xl font-serif font-semibold">
          Happy Birthday Mai Lovee
        </p>
        <FaHeart className="animate-bounce" />
      </div>
    </div>
  );
};

export default PopUpContent;
