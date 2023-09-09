import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

import { useTasks } from "../../contexts/TaskContext";
import styles from "./LineChart.module.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: false,
    },
  },

  scales: {
    x: {
      title: {
        display: true,
        text: "Date",
        font: {
          size: 14,
          weight: "bold",
        },
      },
    },
    y: {
      title: {
        display: true,
        text: "Number of finished tasks",
        font: {
          size: 14,
          weight: "bold",
        },
      },
      beginAtZero: true, // Start the Y-axis from 0
      suggestedMin: 0, // Set the minimum value for the Y-axis
      // Use a callback function to customize the Y-axis label formatting
      ticks: {
        callback: function (value) {
          if (Math.floor(value) === value) {
            return value; // Display whole numbers without decimal places
          }
          return ""; // Hide decimal places for non-integer values
        },
      },
    },
  },
};

function LineChart() {
  const { tasks } = useTasks();

  // Filter tasks that are finished
  const finishedTasks = tasks.filter((task) => task.status === "Finished");

  // Create an object to count the number of finished tasks for each day
  const tasksPerDay = {};
  finishedTasks.forEach((task) => {
    const date = task.date; // Assuming 'date' is in the "yyyy-mm-dd" format
    if (!tasksPerDay[date]) {
      tasksPerDay[date] = 1;
    } else {
      tasksPerDay[date]++;
    }
  });

  // Extract the dates and task counts for the chart
  const labels = Object.keys(tasksPerDay);
  const taskCounts = Object.values(tasksPerDay);

  const data = {
    labels,
    datasets: [
      {
        label: "Tasks Accomplished Per Day",
        data: taskCounts,
        borderColor: "#090B7A",
        backgroundColor: "#fff",
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  return (
    <div className={styles.card}>
      <p className="text-[24px] font-medium">Tasks Accomplished Per Day</p>
      {finishedTasks.length > 0 ? (
        <Line className="mt-8" options={options} data={data} />
      ) : (
        <p className="text-center py-4 text-[18px] mt-8">No data to display!</p>
      )}
    </div>
  );
}

export default LineChart;
