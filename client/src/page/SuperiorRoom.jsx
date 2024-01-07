import Header from "../shared/Header";
import NavigateHelper from "../utils/navigateHelper";

const SuperiorRoom = () => {
  NavigateHelper();
  return (
    <div>
      <Header
        imageUrl="./header/superior.jpg"
        textBeforeBr="Superior"
        textAfterBr="Room"
      />
    </div>
  );
};

export default SuperiorRoom;
