import Header from "../shared/Header";
import NavigateHelper from "../utils/navigateHelper";
const HomePage = () => {
  NavigateHelper();
  return (
    <>
      <Header
        imageUrl="./header/home-header2.jpg"
        textBeforeBr="Lets Relax &"
        textAfterBr="Unwind by the Sea"
        secondTextBeforeBr="Your Serene Escape at the Beach Hotel"
      />
    </>
  );
};

export default HomePage;
