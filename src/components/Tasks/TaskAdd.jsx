import Button from "../ui/Button";
import { useState } from "react";
import { useTasks } from "../../contexts/TaskContext";
import { v4 as uuidv4 } from "uuid";
import { useCategories } from "../../contexts/CategoryContext";
import Modal from "../ui/Modal";

function TaskAdd({ setOpen }) {
  const { handleAddTask } = useTasks();
  const { categories } = useCategories();

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !category || !date) return;

    const newTask = {
      id: uuidv4(),
      name,
      category,
      date,
      status: "Not started",
    };
    handleAddTask(newTask);
    setOpen(false);
  }

  function handleCancel(e) {
    e.preventDefault();
    setName("");
    setCategory("");
    setDate("");
  }

  return (
    <Modal
      onClick={() => {
        setOpen(false);
      }}
    >
      <h1 className="text-[32px] font-bold text-center text-[#030307] pb-4">
        Add New Task
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col pb-3">
          <label className="pb-1 pl-1 text-[#030438] font-medium">Task</label>
          <input
            value={name}
            type="text"
            placeholder="Your task description"
            className="ease-in duration-300 p-2 border border-[#E5E6FF] rounded-lg focus:ring-2 focus:ring-offset-2 outline-none focus:outline-none focus:ring-[#E5E6FF] focus:border-[#C2C4F9]"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col pb-3">
          <label className="pb-1 pl-1 text-[#030438] font-medium">
            Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
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
          <label className="pb-1 pl-1 text-[#030438] font-medium">
            Due Date
          </label>
          <input
            value={date}
            onChange={(e) => setDate(e.target.value)}
            type="date"
            className="ease-in duration-300 p-2 border border-[#E5E6FF] rounded-lg focus:ring-2 focus:ring-offset-2 outline-none focus:outline-none focus:ring-[#E5E6FF] focus:border-[#C2C4F9]"
          />
        </div>
        <div className="pt-4 flex justify-end space-x-2">
          <Button onClick={handleCancel} type="secondary">
            Reset
          </Button>
          <Button>+ Add Task</Button>
        </div>
      </form>
    </Modal>
  );
}

export default TaskAdd;
