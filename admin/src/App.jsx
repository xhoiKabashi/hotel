import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./ui/layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "contact",
        element: <h2>hey</h2>,
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
