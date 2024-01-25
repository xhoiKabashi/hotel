import Header from "../ui/Header";
import NavigateHelper from "../services/navigateHelper";
import PageSection from "../components/pageSections/PageSection";
import { v4 as uuidv4 } from "uuid";
import ImageCollage from "../ui/ImageCollage";
import {
  useRestaurantPage,
  useLunchDsc,
  useDinnerDsc,
  useBreakfastDsc,
} from "../api/restaurant/restaurantPage";

const Restaurant = () => {
  const { data: header } = useRestaurantPage();
  const { data: lunch } = useLunchDsc();
  const { data: dinner } = useDinnerDsc();
  const { data: breakfast } = useBreakfastDsc();

  const meals = [
    { mealData: lunch, title: "Lunch" },
    { mealData: dinner, title: "Dinner" },
    { mealData: breakfast, title: "Breakfast" },
    // Add more meals if needed
  ];

  NavigateHelper();
  return (
    <>
      <Header
        imageUrl={header?.restaurantPageHeaderImg}
        textBeforeBr={header?.levelOneTitle}
        textAfterBr={header?.levelTwoTitle}
        secondTextBeforeBr={header?.levelThreeTitle}
      />

      <div key={uuidv4()} className="p-5">
        {meals.map((meal) => (
          <div key={uuidv4()}>
            <PageSection
              key={uuidv4()}
              title={meal.mealData?.title}
              content={meal.mealData?.description}
              imageUrl={meal.mealData?.photos[0]}
              position={meal.mealData?.position}
            />
            <ImageCollage
              key={uuidv4()}
              imageUrl={meal.mealData?.photos.slice(1)} // Slice to get the remaining photos
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Restaurant;
