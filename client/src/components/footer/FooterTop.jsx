import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaYoutube,
  FaInstagramSquare,
  FaTiktok,
} from "react-icons/fa";
import { useGetHeader } from "../../hooks/useGetDataQuery";

const FooterTop = () => {
  const queryHeader = {
    key: "social-data",
    endPoint: "social-data",
  };
  const { data } = useGetHeader(queryHeader);

  return (
    <div className="p-5">
      <div className="flex flex-col items-center gap-2 xl:flex-row justify-around border-t-2 border-b-2 p-5">
        <div className="text-sm">© 2023 ALL RIGHTS RESERVED</div>
        <div className="flex gap-2  text-xs xl:gap-9 *:text-base">
          <Link to="./our-rooms">OUR ROOMS</Link>
          <Link to="./restaurant-bar">RESTAURANT</Link>
          <Link to="./contact-us">CONTACT</Link>
        </div>
        <Link to="./about-us" className="text-sm  pb-4  xl:text-base xl:pb-0">
          ABOUT THE HOTEL
        </Link>
        <div className="flex gap-8 text-2xl mb-3">
          <a href={data?.fbUrl} target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href={data?.instaUrl} target="_blank" rel="noopener noreferrer">
            <FaInstagramSquare />
          </a>
          <a href={data?.youTubeUrl} target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
          <a href={data?.tikTokUrl} target="_blank" rel="noopener noreferrer">
            <FaTiktok />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
