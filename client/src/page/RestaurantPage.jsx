import Header from "../shared/Header";
import NavigateHelper from "../utils/navigateHelper";
import PageSection from "../components/pageSections/PageSection";
import { restaurantData } from "../utils/data/restaurantData";
import { v4 as uuidv4 } from "uuid";
import ImageCollage from "../shared/ImageCollage";
const Restaurant = () => {
  console.log(restaurantData);
  NavigateHelper();
  return (
    <>
      <Header
        imageUrl="./header/restaurant.jpg"
        textBeforeBr="Restaurant"
        textAfterBr="& Bar"
        secondTextBeforeBr="At Blue Coast Restaurant, savor a symphony of flavors expertly crafted with locally-sourced ingredients. Our , "
        secondTextAfterBr="stylish ambiance, attentive service, and signature cocktails create an unforgettable dining experience."
      />
      {restaurantData.map((data) => (
        <div key={uuidv4()} className="p-5">
          <PageSection
            key={uuidv4()}
            title={data.title}
            content={data.content}
            imageUrl={data.imageUrl}
            position={data.position}
          />
          <ImageCollage key={uuidv4()} imageUrl={data.collage} />
        </div>
      ))}
    </>
  );
};

export default Restaurant;
