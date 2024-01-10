import Header from "../ui/Header";
import NavigateHelper from "../services/navigateHelper";

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
