import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";

import { PathnameBlocked } from "../PathnameBlocked";

const LayoutSidebar = () => {
  return (
    <div className="flex  justify-center md:min-h-screen md:items-center md:bg-blue-50 font-[ubuntu]">
      <div className=" relative md:p-5 max-w-[500px] w-[100%]  h-[600px]   bg-blue-50  md:bg-white md:max-h-[550px] md:max-w-[850px] md:m-5 md:rounded-lg  ">
        <PathnameBlocked />
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutSidebar;
