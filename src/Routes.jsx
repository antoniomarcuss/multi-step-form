import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Info from "./pages/Info/index.jsx";
import { PlanProvider } from "./context/PlanContext/index.jsx";
import LayoutSidebar from "./components/LayoutSidebar/index.jsx";
import Plan from "./pages/Plan/index.jsx";
import Add from "./pages/Add/index.jsx";
import Summary from "./pages/Summary/index.jsx";
import End from "./pages/End/index.jsx";

export const Routes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<LayoutSidebar />}>
        <Route index element={<Info />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/add" element={<Add />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/end" element={<End />} />
        <Route path="*" />
      </Route>
    )
  );

  return (
    <PlanProvider>
      <RouterProvider router={router}></RouterProvider>
    </PlanProvider>
  );
};
