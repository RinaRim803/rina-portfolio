import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children:[
      // {
      //   path:"/"
      // }
    ]
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
