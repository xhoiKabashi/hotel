import Header from "../ui/Header";
import NavigateHelper from "../services/navigateHelper";

const StandardRoom = () => {
  NavigateHelper();
  return (
    <div>
      <Header
        imageUrl="./header/standard-room.jpg"
        textBeforeBr="Standard"
        textAfterBr="Room"
      />
    </div>
  );
};

export default StandardRoom;
