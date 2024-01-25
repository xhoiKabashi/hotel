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
// import StandardRoom from "./page/StandardRoom";
// import DeluxeRoom from "./page/DeluxeRoom";
// import SuperiorRoom from "./page/SuperiorRoom";
import SignatureRoom from "./page/SignatureRoom";
// import ExecutiveSuite from "./page/ExecutiveSuite";
// import PoolVilla from "./page/PoolVilla";

{
  /* <Route path="/standard-room" element={<StandardRoom />} />
<Route path="/deluxe-room" element={<DeluxeRoom />} />
<Route path="/superior-room" element={<SuperiorRoom />} />
<Route path="/signature-room" element={<SignatureRoom />} />
<Route path="/executive-suite" element={<ExecutiveSuite />} />
<Route path="/pool-villa" element={<PoolVilla />} /> */
}

// rooter to navigate between pages
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/our-rooms" element={<AllRoomsPage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/restaurant-bar" element={<Restaurant />} />
      <Route path="/contact-us" element={<ContactPage />} />
      <Route path="/rooms/:id" element={<SignatureRoom />} />
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
