import React from "react";
import { RxCross2 } from "react-icons/rx";
import notice from "../../data/notice.json";
import { SiHashnode } from "react-icons/si";

const NoticePopupComponent = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white p-6 rounded-lg relative w-[60vw] h-[90vh]">
        <button onClick={onClose} className="absolute top-2 right-2 text-xl">
          <RxCross2 />
        </button>

        <div className="overflow-y-auto h-full">
          <h2 className="text-lg font-semibold text-center text-[#000035] my-2.5">
            Notice
          </h2>
          <div>
            <ol>
              {notice.map((data) => {
                return (
                  <div className="flex items-center gap-4 text-[#000035]">
                    <SiHashnode/>
                    <li className="text-[#000035] mb-3" key={data.id}>
                      {data.notice}
                    </li>
                  </div>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticePopupComponent;
