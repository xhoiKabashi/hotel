// add react-router
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "./shared/Layout";
import HomePage from "./page/HomePage";
import AllRoomsPage from "./page/AllRoomsPage";
import AboutUsPage from "./page/AboutUs";
import Restaurant from "./page/RestaurantPage";
import ContactPage from "./page/ContactPage";

// rooter to navigate between pages
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/our-rooms" element={<AllRoomsPage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/restaurant-bar" element={<Restaurant />} />
      <Route path="/contact-us" element={<ContactPage />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
