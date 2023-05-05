import "./App.css";
import * as React from "react";

import {
  RouterProvider,
  createHashRouter,
  Navigate,
  createBrowserRouter,
} from "react-router-dom";
import UserPage from "./pages/components/UserPage/UserPage";
import CourseList from "./pages/components/CourseList/CourseList";
import LoginPage from "./pages/components/LoginPage/LoginPage";
import RootLayout from "./layout/RootLayout";
import PrivateRoute from "./components/PrivateRoute";
import LoginPageOOP from "./pages/components/LoginPage/LoginPageOOP";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <LoginPage /> },
      {
        path: "/UserPage",
        element: (
          <PrivateRoute>
            <UserPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/CourseList/:id",
        element: (
          <PrivateRoute>
            {" "}
            <CourseList />
          </PrivateRoute>
        ),
      },
      { path: "*", element: <Navigate to={"/"} /> },
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
