import Button from "../ui/Button";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useCategories } from "../../contexts/CategoryContext";
import Modal from "../ui/Modal";

function CategoryAdd({ setOpen }) {
  const { handleAddCategory } = useCategories();
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name) return;
    const newCategory = {
      id: uuidv4(),
      name,
    };
    handleAddCategory(newCategory);
    setOpen(false);
  }

  function handleCancel(e) {
    e.preventDefault();
    setName("");
  }

  return (
    <Modal
      onClick={() => {
        setOpen(false);
      }}
    >
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

        <div className="pt-4 flex justify-end space-x-2">
          <Button onClick={handleCancel} type="secondary">
            Reset
          </Button>
          <Button>+ Add Category</Button>
        </div>
      </form>
    </Modal>
  );
}

export default CategoryAdd;
