import React, { useState } from "react";
import img1 from "../../assets/images/letter.png";
import img2 from "../../assets/images/sheep.png";
import img3 from "../../assets/images/flower.png";
import img4 from "../../assets/images/photobooth.png";
import img5 from "../../assets/images/notice.png";
import LetterPopupComponent from "../popups/LetterPopupComponent";
import SheepPopupComponent from "../popups/SheepPopupComponent";
import FlowerPopupComponent from "../popups/FlowerPopupComponent";
import PhotoboothPopupComponent from "../popups/PhotoboothPopupComponent";
import NoticePopupComponent from "../popups/NoticePopupComponent";

const IconComponents = () => {
  const [showLetterPopup, setShowLetterPopup] = useState(false);
  const [showSheepPopup, setShowSheepPopup] = useState(false);
  const [showFlowerPopup, setShowFlowerPopup] = useState(false);
  const [showPhotoboothPopup, setShowPhotoboothPopup] = useState(false);
  const [showNoticePopup, setShowNoticePopup] = useState(false);

  const handleLetterClick = () => {
    setShowLetterPopup(true);
  };

  const closePopup = () => {
    setShowLetterPopup(false);
  };

  const handleSheepClick = () => {
    setShowSheepPopup(true);
  };

  const closeSheepPopup = () => {
    setShowSheepPopup(false);
  };

  const handleFlowerClick = () => {
    setShowFlowerPopup(true);
  };

  const closeFlowerPopup = () => {
    setShowFlowerPopup(false);
  };

  const handlePhotoboothClick = () => {
    setShowPhotoboothPopup(true);
  };

  const closePhotoboothPopup = () => {
    setShowPhotoboothPopup(false);
  };
  
  const handleNoticeClick = () => {
    setShowNoticePopup(true);
  }

  const closeNoticePopup = () => {
    setShowNoticePopup(false);
  }

  return (
    <div>
      <div className="absolute right-24 top-16 md:top-24 z-20 grid grid-cols-2 gap-10">
        <button onClick={handleLetterClick}>
          <img
            src={img1}
            className="w-12 h-12 md:w-20 lg:w-20 md:h-20 lg:h-20"
            alt="letter-img"
          />
          <p className="text-left md:text-center">letter</p>
        </button>
        <button onClick={handleSheepClick}>
          <img
            src={img2}
            className="w-16 h-16 md:w-20 lg:w-20 md:h-20 lg:h-20"
            alt="letter-img"
          />
          <p className="text-left md:text-center">sheep</p>
        </button>
        <button onClick={handleFlowerClick}>
          <img
            src={img3}
            className="w-12 h-12 md:w-20 lg:w-20 md:h-20 lg:h-20"
            alt="letter-img"
          />
          <p className="text-left md:text-center">flower</p>
        </button>
        <button onClick={handlePhotoboothClick}>
          <img
            src={img4}
            className="w-12 h-12 md:w-20 lg:w-20 md:h-20 lg:h-20"
            alt="letter-img"
          />
          <p className="text-left md:text-center">photobooth</p>
        </button>
        <button onClick={handleNoticeClick}>
          <img
            src={img5}
            className="w-12 h-12 md:w-20 lg:w-20 md:h-20 lg:h-20"
            alt="letter-img"
          />
          <p className="text-left md:text-center">Notice</p>
        </button>
      </div>

      <div>
        {showLetterPopup && <LetterPopupComponent onClose={closePopup} />}
        {showSheepPopup && <SheepPopupComponent onClose={closeSheepPopup} />}
        {showFlowerPopup && <FlowerPopupComponent onClose={closeFlowerPopup}/>}
        {showPhotoboothPopup && <PhotoboothPopupComponent onClose={closePhotoboothPopup}/>}
        {showNoticePopup && <NoticePopupComponent onClose={closeNoticePopup}/>}
      </div>
    </div>
  );
};

export default IconComponents;
