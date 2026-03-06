import React from "react";
import { RxCross2 } from "react-icons/rx";
import img from "../../assets/images/ronnitxme.jpg";

const PhotoboothPopupComponent = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white p-6 rounded-lg relative w-100 h-[90vh]">
        <button onClick={onClose} className="absolute top-2 right-2 text-xl">
          <RxCross2 />
        </button>

        <div className="overflow-y-auto h-full">
          <h2 className="text-lg font-semibold text-center text-[#000035] my-2.5">
            Photobooth
          </h2>
          <img src={img} alt="photobooth" className="rounded" />
          <p className="mt-2 text-[#000035]">*Lets recreate this soon heheh</p>
          <p className="text-red-600">
            ps- I was excited to show you this T-T <br /> hope you like it
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhotoboothPopupComponent;
