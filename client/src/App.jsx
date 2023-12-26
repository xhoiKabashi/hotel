// add react-router
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "./shared/components/Layout";
import HomePage from "./page/HomePage";
import AllRoomsPage from "./page/AllRoomsPage";

// rooter to navigate between pages
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/our-rooms" element={<AllRoomsPage />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
