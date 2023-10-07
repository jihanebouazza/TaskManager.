import { useState } from "react";
import Button from "../ui/Button";
import User from "./User";
import Overlay from "../ui/Overlay";
import TaskAdd from "../Tasks/TaskAdd";
import { useAuth } from "../../contexts/AuthContext";

function Header() {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="flex items-center justify-between w-full">
        <div className="text-[#242434] text-[28px] font-medium">
          Hello, {user.firstname}
        </div>
        <div className="flex items-center justify-between">
          <div className="mr-2">
            <Button
              onClick={() => {
                setOpen(true);
              }}
            >
              + New Task
            </Button>
          </div>
          <User />
        </div>
      </header>
      {open && (
        <Overlay>
          <TaskAdd setOpen={setOpen} />
        </Overlay>
      )}
    </>
  );
}

export default Header;
