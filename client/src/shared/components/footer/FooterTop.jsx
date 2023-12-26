import {
  FaFacebook,
  FaYoutube,
  FaInstagramSquare,
  FaTiktok,
} from "react-icons/fa";

const FooterTop = () => {
  return (
    <div className="flex flex-col items-center gap-2 xl:flex-row justify-around p-5">
      <div className="text-sm">© 2023 ALL RIGHTS RESERVED</div>
      <div className="flex gap-2  text-xs xl:gap-9 *:text-base">
        <div>OUR ROOMS</div>
        <div>RESTAURANT</div>
        <div>CONTACT</div>
      </div>
      <div className="text-sm  pb-4  xl:text-base xl:pb-0">ABOUT THE HOTEL</div>
      <div className="flex gap-8 text-2xl mb-3">
        <div>
          <FaFacebook />
        </div>
        <div>
          <FaInstagramSquare /> 
        </div>
        <div>
          <FaYoutube />
        </div>
        <div>
          <FaTiktok />
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
