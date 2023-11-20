import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import MyCreateRoute from "./Router/MyCreateRoute.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import { ThemeProvider } from "@material-tailwind/react";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <ThemeProvider>
          <RouterProvider router={MyCreateRoute}></RouterProvider>
        </ThemeProvider>
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
);

/**
 * echo "# b8a11-client-side-tayeb012" >> README.md
  git init
  git add README.md
  git commit -m "first commit"
  git branch -M main
  git remote add origin https://github.com/Porgramming-Hero-web-course/b8a11-client-side-tayeb012.git
  git push -u origin main
 */
