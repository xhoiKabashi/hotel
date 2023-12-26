const FooterBottom = () => {
  return (
    <div className="flex flex-col items-center gap-4 pb-4 xl:flex-row justify-center">
      <div className="flex gap-4 p-5 xl:p-10 xl:gap-10">
        <div>
          <img
            className="w-16 h-16"
            src="./awards.png"
            alt="International Awards"
          />
        </div>
        <div>
          <img
            className="w-18 h-16"
            src="./booking.png"
            alt="International Awards"
          />
        </div>
        <div>
          <img
            className="w-16 h-16"
            src="./global.png"
            alt="International Awards"
          />
        </div>
      </div>

      <div className="flex gap-4  xl:gap-10">
        <div>
          <img
            className="w-16 h-16"
            src="./tripadviso1.png"
            alt="International Awards"
          />
        </div>
        <div>
          <img
            className="w-16 h-16"
            src="./tripadviso2.png"
            alt="International Awards"
          />
        </div>
        <div>
          <img
            className="w-16 h-16"
            src="./worldbutique.png"
            alt="International Awards"
          />
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
