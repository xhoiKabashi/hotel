import Layout from "../ui/Layout";
import LunchUploadForm from "../page/Contact";
import EditWebsite from "../page/EditWebsite";
import EditBreakfast from "../features/edit/editRestaurantPage/editBreakfast";
import EditAboutUsHeader from "../features/edit/editAboutUs/EditAboutUsHeader";
import EditAboutUsContent from "../features/edit/editAboutUs/EditAboutUsContent";
import EditContactPage from "../features/edit/contact/EditContact";
//
import GenInfo from "../features/edit/GenInfo";
import HomeHeader from "../features/edit/HomeHeader";
import HomeContent from "../features/edit/HomeContent";
import RestaurantHeader from "../features/edit/RestaurantHeader";

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
              path: "restaurant-menu",
              element: <EditBreakfast />,
            },
            {
              path: "about",
              elements: <EditAboutUsHeader />,
            },
            {
              path: "about-us-header",
              element: <EditAboutUsHeader />,
            },
            {
              path: "about-content",
              element: <EditAboutUsContent />,
            },
            {
              path: "contact-social",
              element: <EditContactPage />,
            },
          ],
        },
      ],
    },
  ];
};

export default Routes;
