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

      <div
        className="text-[#000035] bg-contain bg-no-repeat bg-center rounded-lg hidden md:hidden lg:grid place-items-center gap"
        style={{ backgroundImage: `url(${background})` }}
      >
        <p className="text-sm md:text-xl font-serif font-semibold flex items-center gap-2 mt-6">
          Happy Birthday Mai Lovee <FaHeart className="animate-bounce" />
        </p>
        <button>
          <img src={cakegif} alt="cake" className="w-6 h-6 animate-bounce" />
        </button>
      </div>

      <div className="text-[#000035] lg:hidden">
        <p className="text-sm md:text-xl font-serif font-semibold flex justify-center items-center gap-2">
          Happy Birthday Mai Lovee <FaHeart className="animate-bounce" />
        </p>
        <p className="text-sm font-normal m-2 text-center">
          Click on the cake
        </p>
        <div className="flex justify-center items-center mt-4">
          <button>
            <img src={cakegif} alt="cake" className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUpContent;
