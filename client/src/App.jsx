// add react-router
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "./shared/components/Layout";
import Test from "./shared/components/Test";
import HomePage from "./page/HomePage";

// rooter to navigate between pages
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/test" element={<Test />} />
      <Route path="/" element={<HomePage />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
