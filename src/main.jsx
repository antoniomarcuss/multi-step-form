import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Info from "./pages/Info/index.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import LayoutSidebar from "./components/LayoutSidebar/index.jsx";
import Plan from "./pages/Plan/index.jsx";
import Add from "./pages/Add/index.jsx";
import Summary from "./pages/Summary/index.jsx";
import End from "./pages/End/index.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<LayoutSidebar />}>
      <Route index element={<Info />} />
      <Route path="/plan" element={<Plan />} />
      <Route path="/add" element={<Add />} />
      <Route path="/summary" element={<Summary />} />
      <Route path="/end" element={<End />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Info />
    </RouterProvider>
  </React.StrictMode>
);
