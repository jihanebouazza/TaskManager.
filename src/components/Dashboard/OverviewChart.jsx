import styles from "./OverviewChart.module.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useTasks } from "../../contexts/TaskContext";

ChartJS.register(ArcElement, Tooltip, Legend);

function OverviewChart() {
  const { tasks } = useTasks();

  const finishedTasksPercentage = Math.floor(
    (tasks.filter((task) => task.status === "Finished").length / tasks.length) *
      100
  );
  const inProgressTasksPercentage = Math.floor(
    (tasks.filter((task) => task.status === "In progress").length /
      tasks.length) *
      100
  );
  const notStartedTasksPercentage = Math.floor(
    (tasks.filter((task) => task.status === "Not started").length /
      tasks.length) *
      100
  );

  const data = {
    labels: ["Not Started", "In Progress", "Finished"],
    datasets: [
      {
        label: "% of Tasks",
        // convert to percentage
        data: [
          notStartedTasksPercentage,
          inProgressTasksPercentage,
          finishedTasksPercentage,
        ],
        backgroundColor: ["#FFB1B1", "#FFD3A0", "#ACF19B"],
      },
    ],
  };

  return (
    <div className={styles.card}>
      <p className="text-[24px] font-medium">Task Overview</p>
      {tasks.length ? (
        <Doughnut
          data={data}
          width={300} // set the width in pixels
          height={300}
        />
      ) : (
        <p className="text-center py-4 text-[18px] mt-8">No data to dispaly!</p>
      )}
    </div>
  );
}

export default OverviewChart;
