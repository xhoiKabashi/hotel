import Header from "../ui/Header";
import NavigateHelper from "../services/navigateHelper";

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
