import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Header from "./components/Header";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Homepage />,

      },
      {
        path: 'locations',
        element: <Locations />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
