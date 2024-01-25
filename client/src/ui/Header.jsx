/* eslint-disable react/prop-types */
import getImage from "../services/getImage";
const Header = ({
  imageUrl,
  textBeforeBr,
  textAfterBr,
  secondTextBeforeBr,
  secondTextAfterBr,
}) => {
  return (
    <header
      className="bg-cover bg-center h-screen bg-gradient-to-b from-slate-900 to-transparent flex items-center"
      style={{ backgroundImage: `url("${getImage + imageUrl}")` }}
    >
      <div className="text-slate-50  ml-7 md:ml-48 mt-56 break-inside-avoid-column">
        <div className="text-5xl md:whitespace-pre-line break-words lg:text-7xl">
          {textBeforeBr}
          <br /> {textAfterBr}
        </div>
        <div className="text-1xl font-semibold">
          {secondTextBeforeBr}
          <br />
          {secondTextAfterBr}
        </div>
      </div>
    </header>
  );
};

export default Header;
