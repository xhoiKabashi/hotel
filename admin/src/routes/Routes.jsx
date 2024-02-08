import Layout from "../ui/Layout";
import Rooms from "../page/Rooms";
import EditWebsite from "../page/EditWebsite";
// import EditBreakfast from "../features/edit/editRestaurantPage/editBreakfast";

//
import GenInfo from "../features/edit/GenInfo";
import HomeHeader from "../features/edit/HomeHeader";
import HomeContent from "../features/edit/HomeContent";
import RestaurantHeader from "../features/edit/restaurant/RestaurantHeader";
import AboutHeader from "../features/edit/AboutHeader";
import AboutContent from "../features/edit/AboutContent";
import Socials from "../features/edit/Socials";
import RestaurantContent from "../features/edit/restaurant/RestaurantContent";
import Dinner from "../features/edit/restaurant/Dinner";
import Lunch from "../features/edit/restaurant/Lunch";
import Breakfast from "../features/edit/restaurant/Breakfast";
import CreateRooms from "../features/rooms/CreateRooms";
import UpdateRooms from "../features/rooms/UpdateRooms";
import AllRoomTypes from "../features/rooms/AllRoomTypes";
import RoomsContent from "../features/rooms/RoomsContent";
import CreateRoomInstances from "../features/rooms/CreateRoomInstances";
import AllRoomInstances from "../features/rooms/AllRoomInstances";

const Routes = () => {
  return [
    {
      path: "/",
      element: <Layout />,
      children: [
        // Create Rooms
        {
          path: "rooms",
          element: <Rooms />,
          children: [
            {
              path: "",
              element: <CreateRooms />,
            },
            {
              path: "create-types",
              element: <CreateRooms />,
            },
            {
              path: "create-instances",
              element: <CreateRoomInstances />,
            },
            {
              path: "all-room-instances",
              element: <AllRoomInstances />,
            },

            {
              path: "all-room-types",
              element: <RoomsContent />,
              children: [
                {
                  path: "",
                  element: <AllRoomTypes />,
                },
                {
                  path: "update/:id",
                  element: <UpdateRooms />,
                },
              ],
            },
          ],
        },
        // Edit Website
        {
          path: "edit-website",
          element: <EditWebsite />,
          children: [
            {
              path: "",
              element: <GenInfo />,
            },
            {
              path: "logo-name",
              element: <GenInfo />,
            },
            {
              path: "home-page",
              element: <HomeHeader />,
            },
            {
              path: "home-content",
              element: <HomeContent />,
            },
            {
              path: "restaurant-header",
              element: <RestaurantHeader />,
            },
            {
              path: "restaurant-content",
              element: <RestaurantContent />,
              children: [
                {
                  path: "",
                  element: <Breakfast />,
                },
                {
                  path: "breakfast",
                  element: <Breakfast />,
                },
                {
                  path: "lunch",
                  element: <Lunch />,
                },
                {
                  path: "dinner",
                  element: <Dinner />,
                },
              ],
            },

            {
              path: "about-us-header",
              element: <AboutHeader />,
            },
            {
              path: "about-content",
              element: <AboutContent />,
            },
            {
              path: "contact-social",
              element: <Socials />,
            },
          ],
        },
      ],
    },
  ];
};

export default Routes;
