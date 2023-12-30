import Header from "../shared/Header";
import NavigateHelper from "../utils/navigateHelper";

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
