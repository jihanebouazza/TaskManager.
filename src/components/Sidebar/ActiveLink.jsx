import { LuLayoutDashboard } from "react-icons/lu";
import { LuCalendarRange } from "react-icons/lu";
import { Link } from "react-router-dom";

// LuClipboardSignature
// LuClipboardX to remove

function ActiveLink({ CurActive }) {
  return (
    <>
      <Link to="/dashboard">
        <div className="xl:pt-8 2xl:pt-12">
          <div
            className={`flex ${
              CurActive === 1
                ? "p-0 border-0 bg-[#F2F3FF] rounded-lg xl:py-3 -ml-4 px-4 2xl:py-4"
                : ""
            }`}
          >
            <div>
              <LuLayoutDashboard
                color={CurActive === 1 ? "#030438" : "#030307"}
                className="inline-block mb-1 mr-1"
                size={16}
              />
            </div>
            <div
              className={`font-medium ${
                CurActive === 1 ? "text-[#030438]" : "text-[#030307]"
              }`}
            >
              Dashboard
            </div>
          </div>
        </div>
      </Link>
      <Link to="/tasks">
        <div className="xl:pt-6 2xl:pt-10">
          <div
            className={`flex ${
              CurActive === 2
                ? "p-0 border-0 bg-[#F2F3FF] rounded-lg xl:py-3 -ml-4 px-4 2xl:py-4"
                : ""
            }`}
          >
            <div>
              <LuCalendarRange
                color={CurActive === 1 ? "#030438" : "#030307"}
                className="inline-block mb-1 mr-1"
                size={16}
              />
            </div>
            <div
              className={`font-medium ${
                CurActive === 2 ? "text-[#030438]" : "text-[#030307]"
              }`}
            >
              Tasks
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default ActiveLink;
