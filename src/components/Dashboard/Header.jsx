import { useState } from "react";
import Button from "../Button";
import User from "./User";
import Overlay from "../Overlay";
import TaskAdd from "../Tasks/TaskAdd";

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="flex items-center justify-between w-full">
        <div className="text-[#242434] text-[32px] font-medium">
          Hello, John
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
