import Header from "../shared/Header";
import NavigateHelper from "../utils/navigateHelper";

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
