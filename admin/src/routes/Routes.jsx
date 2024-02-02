import Layout from "../ui/Layout";
import LunchUploadForm from "../page/Contact";
import EditWebsite from "../page/EditWebsite";
import EditBreakfast from "../features/edit/editRestaurantPage/editBreakfast";

//
import GenInfo from "../features/edit/GenInfo";
import HomeHeader from "../features/edit/HomeHeader";
import HomeContent from "../features/edit/HomeContent";
import RestaurantHeader from "../features/edit/RestaurantHeader";
import AboutHeader from "../features/edit/AboutHeader";
import AboutContent from "../features/edit/AboutContent";
import Socials from "../features/edit/Socials";
import { Navigate } from "react-router-dom";

const Routes = () => {
  return [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "contact",
          element: <LunchUploadForm />,
        },
        {
          path: "edit-website",
          element: <EditWebsite />,
          children: [
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
