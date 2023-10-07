import { Outlet } from "react-router-dom";
import Header from "../Dashboard/Header";
import Sidebar from "../Sidebar/Sidebar";
import Menu from "./Menu";

function AppLayout() {
  return (
    <>
      <Menu />
      <div className="flex bg-[#FCFDFF]">
        <Sidebar />
        <div className="lg:p-8 p-8 pt-0 w-full lg:ml-[280px]">
          <Header />
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default AppLayout;
