import Header from "../shared/Header";
import NavigateHelper from "../utils/navigateHelper";

const PoolVilla = () => {
  NavigateHelper();
  return (
    <div>
      <Header
        imageUrl="./header/poolVila.jpg"
        textBeforeBr="Pool"
        textAfterBr="Villa"
      />
    </div>
  );
};

export default PoolVilla;
