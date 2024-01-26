// add react-router
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Layout from "./ui/Layout";
import HomePage from "./page/HomePage";
import AllRoomsPage from "./page/AllRoomsPage";
import AboutUsPage from "./page/AboutUs";
import Restaurant from "./page/RestaurantPage";
import ContactPage from "./page/ContactPage";

import Rooms from "./page/Rooms";

// rooter to navigate between pages
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/our-rooms" element={<AllRoomsPage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/restaurant-bar" element={<Restaurant />} />
      <Route path="/contact-us" element={<ContactPage />} />
      <Route path="/rooms/:id" element={<Rooms />} />
    </Route>
  )
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />;
    </QueryClientProvider>
  );
}

export default App;
