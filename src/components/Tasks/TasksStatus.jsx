import { TbProgress, TbProgressAlert, TbProgressCheck } from "react-icons/tb";
import { useTasks } from "../../contexts/TaskContext";

function TasksStatus() {
  const { allTasks } = useTasks();

  const finishedTasks = allTasks.filter((task) => task.status === "Finished");
  const inProgressTasks = allTasks.filter(
    (task) => task.status === "In progress"
  );
  const notStartedTasks = allTasks.filter(
    (task) => task.status === "Not started"
  );

  return (
    <div className="flex justify-between items-center">
      <div className="border-2 border-[#E7FBE2] bg-[#fcfdff] rounded-lg shadow-md w-[32%] p-4 flex items-center">
        <div className="p-2 rounded-full text-center bg-[#E7FBE2] mr-3">
          <TbProgressCheck size={30} color="#0F4D00" />
        </div>
        <div>
          <p className="font-medium text-[#030307]">Finished</p>
          <p className="text-[14px] text-[#6B6B70]">
            {finishedTasks.length} Task{finishedTasks.length === 1? '':'s'}
          </p>
        </div>
      </div>
      <div className=" bg-[#fcfdff] border-2 border-[#FAEEE1] rounded-lg shadow-md w-[32%] p-4 flex items-center">
        <div className="p-2 rounded-full text-center bg-[#FAEEE1] mr-3">
          <TbProgress size={30} color="#402200" />
        </div>
        <div>
          <p className="font-medium text-[#030307]">Started</p>
          <p className="text-[14px] text-[#6B6B70]">
            {inProgressTasks.length} Task{inProgressTasks.length === 1? '':'s'}
          </p>
        </div>
      </div>
      <div className="bg-[#fcfdff] rounded-lg shadow-md w-[32%] p-4 flex items-center border-2 border-[#FADCDC]">
        <div className="p-2 rounded-full text-center bg-[#FADCDC] mr-3">
          <TbProgressAlert size={30} color="#4D0303" />
        </div>
        <div>
          <p className="font-medium text-[#030307]">Not started</p>
          <p className="text-[14px] text-[#6B6B70]">
            {notStartedTasks.length} Task{notStartedTasks.length === 1? '':'s'}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TasksStatus;
