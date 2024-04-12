import imgSidebarMobile from "../../assets/images/bg-sidebar-mobile.svg";
import imgSidebarDesktop from "../../assets/images/bg-sidebar-desktop.svg";
import { useLocation } from "react-router-dom";

import { pages } from "./components/LinkPage";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="absolute flex justify-center md:w-96 w-full md:z-50 ">
      <div className="absolute flex w-full gap-4 h-20 items-center  justify-center md:flex-col md:left-5 md:top-8 md:z-10  md:w-fit md:h-fit   ">
        {pages.map(({ page, id, link }) => (
          <div
            key={id}
            className="  md:flex md:items-center md:gap-3 -400 md:w-full "
          >
            <div
              className={`w-10 h-10 border flex items-center justify-center  font-bold rounded-full md:w-8 md:h-8 ${
                location.pathname === link
                  ? "bg-blue-200 text-black"
                  : "text-white"
              } `}
            >
              {id}
            </div>
            <div className="hidden md:flex flex-col">
              <span className="text-gray-300 text-sm">STEP {id}</span>
              <span className="text-white font-bold tracking-widest text-sm">
                {location.pathname === "/end"
                  ? (location.pathname = "/summary")
                  : page}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full bg-red-300 md:absolute left-0 md:w-fit md:rounded-lg   ">
        <img src={imgSidebarMobile} alt="" className="md:hidden w-full     " />
        <img
          src={imgSidebarDesktop}
          alt=""
          className="hidden md:flex  md:h-[510px] ob      "
        />
      </div>
    </div>
  );
};

export default Sidebar;
