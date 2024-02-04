import NavigationList from "./NavigationList";

const RestaurantNavigation = () => {
  return (
    <ul className=" flex gap-2">
      <NavigationList to="/edit-website/restaurant-content/breakfast">
        Breakfast
      </NavigationList>
      <NavigationList to="/edit-website/restaurant-content/lunch">
        Lunch
      </NavigationList>
      <NavigationList to="/edit-website/restaurant-content/dinner">
        Dinner
      </NavigationList>
    </ul>
  );
};

export default RestaurantNavigation;
