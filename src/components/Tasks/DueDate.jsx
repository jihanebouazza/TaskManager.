import { useTasks } from "../../contexts/TaskContext";

function DueDate() {
  const { dueDate, setDueDate } = useTasks();

  return (
    <div className="py-8 w-full flex items-center justify-end">
      <div className="w-[20%]">
        <select
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="ease-in duration-300 p-2 border border-[#E5E6FF] rounded-lg focus:ring-2 focus:ring-offset-2 outline-none focus:outline-none focus:ring-[#E5E6FF] focus:border-[#C2C4F9] w-full"
        >
          <option value="All tasks">All tasks</option>
          <option value="Today">Today</option>
          <option value="Tomorrow">Tomorrow</option>
        </select>
      </div>
    </div>
  );
}

export default DueDate;
