import Header from "../ui/Header";
import NavigateHelper from "../services/navigateHelper";

const ExecutiveSuite = () => {
  NavigateHelper();
  return (
    <div>
      <Header
        imageUrl="./header/executive.jpg"
        textBeforeBr="Executive"
        textAfterBr="Room"
      />
    </div>
  );
};

export default ExecutiveSuite;
