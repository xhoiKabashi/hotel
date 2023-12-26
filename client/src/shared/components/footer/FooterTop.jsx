import {
  FaFacebook,
  FaYoutube,
  FaInstagramSquare,
  FaTiktok,
} from "react-icons/fa";

const FooterTop = () => {
  return (
    <div className="flex flex-col items-center gap-2 xl:flex-row justify-around p-5">
      <div>© 2023 ALL RIGHTS RESERVED</div>
      <div className="flex gap-2 xl:gap-9">
        <div>OUR ROOMS</div>
        <div>ABOUT THE HOTEL</div>
        <div>RESTAURANT</div>
      </div>
      <div>CONTACT</div>
      <div className="flex gap-8 text-xl mb-4">
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
