import DueDate from "./DueDate";
import Searchbar from "./Searchbar";
import TasksStatus from "./TasksStatus";
import { useState } from "react";
import TaskUpdate from "./TaskUpdate";
import Overlay from "../ui/Overlay";
import Task from "./Task";
import { useTasks } from "../../contexts/TaskContext";

function AllTasks() {
  const [open, setOpen] = useState(false);
  const { allTasks } = useTasks();
  const [id, setId] = useState("");

  return (
    <>
      <div>
        <DueDate />
        <TasksStatus />
        <Searchbar />
        <div className=" bg-[#fcfdff] rounded-lg shadow-md p-4 mt-4 mb-8">
          <p className="text-[24px] font-medium text-[#030307] p-2 ">
            My tasks
          </p>
          {allTasks.length > 0 
            ? allTasks.map((task) => (
                <Task
                  setId={setId}
                  key={task.id}
                  task={task}
                  setOpen={setOpen}
                />
              ))
            : (
                <p className="text-center py-4 text-[18px]">
                  You have no tasks!
                </p>
              )}
        </div>
      </div>
      {open && (
        <Overlay>
          <TaskUpdate id={id} setOpen={setOpen} />
        </Overlay>
      )}
    </>
  );
}

export default AllTasks;
