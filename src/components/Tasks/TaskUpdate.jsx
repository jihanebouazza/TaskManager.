import { IoCloseOutline } from "react-icons/io5";
import Button from "../Button";
import { useTasks } from "../../contexts/TaskContext";
import { useState } from "react";
import { useCategories } from "../../contexts/CategoryContext";
// import { useState } from "react";

function TaskUpdate({ setOpen, id }) {
  const { getTaskById, handleUpdateTask } = useTasks();
  const { categories } = useCategories();

  const task = getTaskById(id);
  const { name, category, status, date } = task;

  const [nameU, setNameU] = useState(name);
  const [categoryU, setCategoryU] = useState(category);
  const [dateU, setDateU] = useState(date);
  const [statusU, setStatusU] = useState(status);

  function handleSubmit(e) {
    e.preventDefault();
    const updatedTask = {
      ...task,
      name: nameU,
      category: categoryU,
      date: dateU,
      status: statusU,
    };
    handleUpdateTask(updatedTask);
    setOpen(false);
  }

  return (
    <div className="bg-white w-[50%] p-8 rounded-xl">
      <div className="flex justify-end">
        <IoCloseOutline
          size={40}
          className="cursor-pointer"
          onClick={() => {
            setOpen(false);
          }}
        />
      </div>
      <h1 className="text-[32px] font-bold text-center text-[#030307] pb-4">
        Update Task
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col pb-3">
          <label className="pb-1 pl-1 text-[#030438] font-medium">Task</label>
          <input
            value={nameU}
            type="text"
            placeholder="Your task description"
            className="ease-in duration-300 p-2 border border-[#E5E6FF] rounded-lg focus:ring-2 focus:ring-offset-2 outline-none focus:outline-none focus:ring-[#E5E6FF] focus:border-[#C2C4F9]"
            onChange={(e) => setNameU(e.target.value)}
          />
        </div>
        <div className="flex flex-col pb-3">
          <label className="pb-1 pl-1 text-[#030438] font-medium">
            Category
          </label>
          <select
            value={categoryU}
            onChange={(e) => setCategoryU(e.target.value)}
            className="ease-in duration-300 p-2 border border-[#E5E6FF] rounded-lg focus:ring-2 focus:ring-offset-2 outline-none focus:outline-none focus:ring-[#E5E6FF] focus:border-[#C2C4F9]"
          >
            <option value="">Choose a task category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col pb-3">
          <label className="pb-1 pl-1 text-[#030438] font-medium">Status</label>
          <select
            value={statusU}
            onChange={(e) => setStatusU(e.target.value)}
            className="ease-in duration-300 p-2 border border-[#E5E6FF] rounded-lg focus:ring-2 focus:ring-offset-2 outline-none focus:outline-none focus:ring-[#E5E6FF] focus:border-[#C2C4F9]"
          >
            <option value=''>Choose a status</option>
            <option value="Finished">Finished</option>
            <option value="In progress">In progress</option>
            <option value="Not started">Not started</option>
          </select>
        </div>
        <div className="flex flex-col pb-3">
          <label className="pb-1 pl-1 text-[#030438] font-medium">
            Due Date
          </label>
          <input
            value={dateU}
            onChange={(e) => setDateU(e.target.value)}
            type="date"
            className="ease-in duration-300 p-2 border border-[#E5E6FF] rounded-lg focus:ring-2 focus:ring-offset-2 outline-none focus:outline-none focus:ring-[#E5E6FF] focus:border-[#C2C4F9]"
          />
        </div>
        <div className="pt-4" style={{ float: "right" }}>
          <Button>Update Task</Button>
        </div>
      </form>
    </div>
  );
}

export default TaskUpdate;
