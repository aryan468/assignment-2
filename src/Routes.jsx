import React from "react";
import { useRoutes, Navigate } from "react-router-dom";
import LANDINGPAGEKSHITIZ2 from "pages/LANDINGPAGEKSHITIZ2";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Navigate to="/landingpagekshitiz2" /> },
    { path: "landingpagekshitiz2", element: <LANDINGPAGEKSHITIZ2 /> }
  ]);

  return element;
};

export default ProjectRoutes;
