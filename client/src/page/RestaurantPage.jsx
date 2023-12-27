import Header from "../shared/Header";
import NavigateHelper from "../utils/navigateHelper";
const Restaurant = () => {
  NavigateHelper();
  return (
    <Header
      imageUrl="./header/restaurant.jpg"
      textBeforeBr="Restaurant"
      textAfterBr="& Bar"
      secondTextBeforeBr="At Blue Coast Restaurant, savor a symphony of flavors expertly crafted with locally-sourced ingredients. Our , "
      secondTextAfterBr="stylish ambiance, attentive service, and signature cocktails create an unforgettable dining experience."
    />
  );
};

export default Restaurant;
