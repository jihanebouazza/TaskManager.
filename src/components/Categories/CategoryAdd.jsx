import { IoCloseOutline } from "react-icons/io5";
import Button from "../Button";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useCategories } from "../../contexts/CategoryContext";

function CategoryAdd({ setOpen }) {
  const { handleAddCategory } = useCategories();
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newCategory = {
      id: uuidv4(),
      name,
    };
    handleAddCategory(newCategory);
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
        Add New Category
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col pb-3">
          <label className="pb-1 pl-1 text-[#030438] font-medium">
            Category
          </label>
          <input
            value={name}
            type="text"
            placeholder="Your task category"
            className="ease-in duration-300 p-2 border border-[#E5E6FF] rounded-lg focus:ring-2 focus:ring-offset-2 outline-none focus:outline-none focus:ring-[#E5E6FF] focus:border-[#C2C4F9]"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="pt-4" style={{ float: "right" }}>
          <Button>+ Add Category</Button>
        </div>
      </form>
    </div>
  );
}

export default CategoryAdd;
