import { LuLayoutDashboard } from "react-icons/lu";
import { LuCalendarRange } from "react-icons/lu";
import { NavLink } from "react-router-dom";


function ActiveLink() {
  return (
    <>
      <NavLink to="/dashboard" className="flex mt-8">
        <div>
          <LuLayoutDashboard
            className="inline-block mb-1 mr-1 text-[#030307]"
            size={16}
          />
        </div>
        <div className="font-medium">Dashboard</div>
      </NavLink>
      <NavLink to="/tasks" className="flex mt-4">
        <div>
          <LuCalendarRange
            className="inline-block mb-1 mr-1 text-[#030307]"
            size={16}
          />
        </div>
        <div className="font-medium">Tasks</div>
      </NavLink>
    </>
  );
}

// <LuCalendarRange

export default ActiveLink;
