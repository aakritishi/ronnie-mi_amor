import React from "react";
import { RxCross2 } from "react-icons/rx";
import img1 from "../../assets/images/sheep1.jpg";
import img2 from "../../assets/images/sheep2.jpg";
import img3 from "../../assets/images/sheep3.jpg";
import img4 from "../../assets/images/sheep4.png";

const SheepPopupComponent = ({ onClose }) => {
  const imageData = [
    {
      id: 1,
      img: img1,
    },
    {
      id: 2,
      img: img2,
    },
    {
      id: 3,
      img: img3,
    },
    {
      id: 4,
      img: img4,
    }
  ];
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white p-6 rounded-lg relative w-[65vw] h-[70vh]  m-6">
        <button onClick={onClose} className="absolute top-2 right-2 text-xl">
          <RxCross2 />
        </button>

        <div className="overflow-y-auto h-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {imageData.map((data) => {
            return (
              <div key={data.id}>
                <img
                  src={data.img}
                  alt="imagepopup"
                  className="w-40 h-40 md:w-60 md:h-60 object-contain rounded"
                />
              </div>
            );
          })}
        </div>
        <p className="text-red-600">ps- taking mr.sheep everywhere i go <br /> will add more</p>
        </div>
      </div>
    </div>
  );
};

export default SheepPopupComponent;
