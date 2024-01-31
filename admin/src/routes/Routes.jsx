import Layout from "../ui/Layout";
import LunchUploadForm from "../page/Contact";
import EditWebsite from "../page/EditWebsite";
import EditHomeContent from "../features/edit/editHome/EditHomeContent";
import EditRestaurantHeader from "../features/edit/editRestaurantPage/EditRestaurantHeader";
import EditBreakfast from "../features/edit/editRestaurantPage/editBreakfast";
import EditAboutUsHeader from "../features/edit/editAboutUs/EditAboutUsHeader";
import EditAboutUsContent from "../features/edit/editAboutUs/EditAboutUsContent";
import EditContactPage from "../features/edit/contact/EditContact";
//
import GenInfo from "../features/edit/GenInfo";
import HomePage from "../features/edit/HomePage";

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
              element: <HomePage />,
            },
            {
              path: "home-content",
              element: <EditHomeContent />,
            },
            {
              path: "restaurant-header",
              element: <EditRestaurantHeader />,
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
