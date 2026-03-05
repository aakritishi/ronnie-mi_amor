import React from "react";
import { RxCross2 } from "react-icons/rx";

const PhotoboothPopupComponent = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white p-6 rounded-lg relative w-80">
        <button onClick={onClose} className="absolute top-2 right-2 text-xl">
          <RxCross2/>
        </button>

        <h2 className="text-lg font-bold">Photobooth Popup</h2>
      </div>
    </div>
  );
};

export default PhotoboothPopupComponent;
