import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import ProjectsPage from "./pages/ProjectsPage";

import projects from "./datas/projects";
const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        element: <HomePage />,
        path: "/",
      },
      {
        element: <ProjectsPage />,
        path: "/projects",
        loader: () => {
          const project = projects;

          return project;
        },
        id: "project",
      },
      {
        element: <ProjectPage />,
        path: "/projects/:id",
      },

      {
        element: <ContactPage />,
        path: "/contact",
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
