import { footerBottomData } from "../../services/data/footerBottomData.js";
import { v4 as uuidv4 } from "uuid";

const FooterBottom = () => {
  return (
    <div className="flex items-center pb-4 justify-center">
      <hr className="my-4 border-t border-gray-800" />
      <div className="grid grid-cols-3 grid-rows-2 gap-10 p-5 justify-center x xl:grid-rows-1 xl:grid-cols-6  xl:gap-10">
        {footerBottomData.map((data) => (
          <img
            key={uuidv4()}
            className="w-16 h-16 xl:w-20 xl:h-20"
            src={data.logo}
            alt="International Awards"
          />
        ))}
      </div>
    </div>
  );
};

export default FooterBottom;
