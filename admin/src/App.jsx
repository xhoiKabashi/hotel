import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./ui/Layout";
import LunchUploadForm from "./page/Contact";
import EditWebsite from "./page/EditWebsite";
const router = createBrowserRouter([
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
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
