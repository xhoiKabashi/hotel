import Header from "../ui/Header";
import NavigateHelper from "../services/navigateHelper";
import PageSection from "../components/pageSections/PageSection";
import { restaurantData } from "../services/data/restaurantData";
import { v4 as uuidv4 } from "uuid";
import ImageCollage from "../ui/ImageCollage";
import { useRestaurantPage } from "../api/restaurantPage";
import getImage from "../services/getImage";

const Restaurant = () => {
  const { data } = useRestaurantPage();

  NavigateHelper();
  return (
    <>
      <Header
        imageUrl={getImage + data?.restaurantPageHeaderImg}
        textBeforeBr={data?.levelOneTitle}
        textAfterBr={data?.levelTwoTitle}
        secondTextBeforeBr={data?.levelThreeTitle}
        // secondTextAfterBr="stylish ambiance, attentive service, and signature cocktails create an unforgettable dining experience."
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
