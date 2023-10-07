import { Link } from "react-router-dom";
import Button from "../ui/Button";
import styles from "./Card.module.css";
import Status from "./Status";
import { TbProgress } from "react-icons/tb";
import { TbProgressAlert } from "react-icons/tb";
import { TbProgressCheck } from "react-icons/tb";
import { useTasks } from "../../contexts/TaskContext";
import { useAuth } from "../../contexts/AuthContext";
import { getToday } from "../../utils/helpers";

function UserCard() {
  const { tasks } = useTasks();
  const { user } = useAuth();

  const today = getToday();

  const todayTasks = tasks.filter((task) => task.date === today);
  const finishedTasks = todayTasks.filter((task) => task.status === "Finished");
  const inProgressTasks = todayTasks.filter(
    (task) => task.status === "In progress"
  );
  const notStartedTasks = todayTasks.filter(
    (task) => task.status === "Not started"
  );

  return (
    <div className={styles.card}>
      <div className="flex items-center">
        <div className="w-44">
          <img
            className="w-32 h-32 rounded-full object-cover"
            src={user.avatar}
          />
        </div>
        <div className="ml-6">
          <p className="font-medium text-[24px] text-[#030307]">
            {user.firstname + " " + user.lastname}
          </p>
          <p className="mt-1 text-[#2F303C]">
            You have{" "}
            <span className="font-medium">
              {todayTasks.length} task{todayTasks.length === 1 ? "" : "s"}
            </span>{" "}
            due <span className="font-medium">Today</span>
          </p>
          <Status
            numberOfTasks={finishedTasks.length}
            icon={TbProgressCheck}
            name="Finished"
            nameColor="#0F4D00"
            bgColor="#E7FBE2"
          />
          <Status
            numberOfTasks={inProgressTasks.length}
            icon={TbProgress}
            name="In progress"
            nameColor="#402200"
            bgColor="#FAEEE1"
          />
          <Status
            numberOfTasks={notStartedTasks.length}
            icon={TbProgressAlert}
            name="Not started"
            nameColor="#4D0303"
            bgColor="#FADCDC"
          />
        </div>
      </div>
      <div className={styles.line}></div>
      <div style={{ float: "right" }}>
        <Link to="/tasks">
          <Button>View All Tasks</Button>
        </Link>
      </div>
    </div>
  );
}

export default UserCard;
