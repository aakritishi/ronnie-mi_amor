import React, { useState } from "react";
import background from "../assets/images/background.jpg";
import npc from "../assets/images/npc.gif";
import PopUpContent from "../components/PopUpContent";
import { RxCross2 } from "react-icons/rx";
import IconComponents from "../components/commons/IconComponents";

const Home = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(true);
  return (
    <div
      className="w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <img
        src={npc}
        alt="NPC"
        className="w-32 h-32 md:w-44 md:h-44 absolute left-16 bottom-44 md:bottom-[15%] z-50"
      />
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-30">
          <div className="bg-linear-to-r from-blue-300 to-white p-3 rounded-lg shadow-lg w-[60%] ">
            <div className="flex justify-end items-end">
              <button
                onClick={() => setIsPopupOpen(false)}
                className="text-[#000035] font-bold text-lg"
              >
                <RxCross2 className="text-[#000035] text-xl font-semibold" />
              </button>
            </div>
            <PopUpContent />
          </div>
        </div>
      )}
      <IconComponents />
    </div>
  );
};

export default Home;
