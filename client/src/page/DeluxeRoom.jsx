import Header from "../shared/Header";
import NavigateHelper from "../utils/navigateHelper";

const DeluxeRoom = () => {
  NavigateHelper();
  return (
    <div>
      <Header
        imageUrl="./header/delux-room.jpg"
        textBeforeBr="Deluxe"
        textAfterBr="Room"
      />
    </div>
  );
};

export default DeluxeRoom;
