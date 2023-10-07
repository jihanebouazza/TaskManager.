import { TbProgress, TbProgressAlert, TbProgressCheck } from "react-icons/tb";
import { useTasks } from "../../contexts/TaskContext";
import SingleTaskStatus from "./SingleTaskStatus";

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
      <SingleTaskStatus
        icon={TbProgressCheck}
        iconColor="#0F4D00"
        value={finishedTasks.length}
        name="Finished"
        bgColor="#E7FBE2"
      />
      <SingleTaskStatus
        icon={TbProgress}
        iconColor="#402200"
        value={inProgressTasks.length}
        name="Started"
        bgColor="#FAEEE1"
      />
      <SingleTaskStatus
        icon={TbProgressAlert}
        iconColor="#4D0303"
        value={notStartedTasks.length}
        name="Not started"
        bgColor="#FADCDC"
      />
    </div>
  );
}

export default TasksStatus;
