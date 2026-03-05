import React from "react";
import { RxCross2 } from "react-icons/rx";
import letter from "../../data/letter.json";

const LetterPopupComponent = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white p-6 rounded-lg relative w-80">
        <button onClick={onClose} className="absolute top-2 right-2 text-xl">
          <RxCross2 />
        </button>

        {letter.map((data) => {
          return (
            <div key={data.id} className="text-[#000035]">
              <h2 className="text-lg font-semibold">{data["first_segment"]}</h2>
              <p>{data.second_segment}</p>
              <p>{data.third_segment}</p>
              <p>{data.third_segment}</p>
              <p>{data.fourth_segment}</p>
              <p>{data.fifth_segment}</p>
              <p>{data.sixth_segment}</p>
              <p>{data.seventh_segment}</p>
              <p>{data.eighth_segment}</p>
              <p>{data.ninth_segment}</p>
              <p>{data.tenth_segment}</p>
              <p>{data.eleventh_segment}</p>
              <p>{data.twelfth_segment}</p>
              <p>{data.thirteenth_segment}</p>
              <p>{data.fourteenth_segment}</p>
              <p>{data.fifteenth_segment}</p>
              <p>{data.sixteenth_segment}</p>
              <p>{data.seventeenth_segmement}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LetterPopupComponent;
