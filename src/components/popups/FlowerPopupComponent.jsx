import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import bouquetbase from "../../assets/images/bouquet-base.png";
import chrysanthemum from "../../assets/images/chrysanthemum.png";

const FlowerPopupComponent = ({ onClose }) => {
  const [flowers, setFlowers] = useState(0);

  const handleAddFlower = () => {
    if (flowers < 5) {
      setFlowers(flowers + 1);
    }
  };

  const flowerPositions = [
    { top: "8%", left: "20%" },
    { top: "5%", left: "34%" },
    { top: "8%", left: "50%" },

    { top: "20%", left: "34%" },
    { top: "20%", left: "46%" },
  ];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white p-6 rounded-lg relative w-[80vw] h-[80vh]">
        <button onClick={onClose} className="absolute top-2 right-2 text-xl">
          <RxCross2 />
        </button>

        {flowers < 5 && (
          <button
            onClick={handleAddFlower}
            className="bg-[#000035] rounded-lg text-white px-3 py-2"
          >
            Add Flower
          </button>
        )}

        <div className="w-full h-[75%] flex items-center justify-center">
          <div className="relative">
            <img src={bouquetbase} alt="bouquetbase" className="w-48 md:w-64" />

            {flowerPositions.slice(0, flowers).map((pos, index) => (
              <img
                key={index}
                src={chrysanthemum}
                alt="flower"
                className="absolute w-12 h-12 md:w-16 md:h-16"
                style={{
                  top: pos.top,
                  left: pos.left,
                }}
              />
            ))}
          </div>
        </div>
        <div className="text-center">
          {flowers === 5 && (
            <p className="text-[#000035]">
              Happy Birthday mai Loveee <br />I wish next year we can go to the
              flower shop together and pick out flowers for each other {}
              <span className="text-orange-600">T-T</span>
              <br />
              <span className="text-red-500">
                ps- please dont mind the css T-T
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FlowerPopupComponent;
