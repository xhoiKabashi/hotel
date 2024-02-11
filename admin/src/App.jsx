import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SkeletonTheme } from "react-loading-skeleton";

import Routes from "./routes/Routes";

const router = createBrowserRouter(Routes());

function App() {
  return (
    <>
      <SkeletonTheme baseColor="#94a3b8" highlightColor="#64748b">
        <RouterProvider router={router} />
      </SkeletonTheme>
    </>
  );
}

export default App;
