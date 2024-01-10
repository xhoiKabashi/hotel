import Header from "../ui/Header";
import NavigateHelper from "../services/navigateHelper";

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
