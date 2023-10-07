import { IoCloseOutline } from "react-icons/io5";
import styles from "../Dashboard/CategoriesCard.module.css";
import { useCategories } from "../../contexts/CategoryContext";
import { useState } from "react";
import DeleteModal from "../ui/DeleteModal";

function Category({ category }) {
  const { handleDeleteCategory } = useCategories();
  const { name, id } = category;
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <div className="w-3 h-3 bg-[#E5E6FF] mr-2 inline-block"></div>
          <p className="text-[#2F303C] inline-block">{name}</p>
        </div>
        <IoCloseOutline
          color="#2F303C"
          size={20}
          className="cursor-pointer mr-4 mt-1"
          onClick={() => setOpenModal(true)}
        />
      </div>
      <div className={styles.line}></div>

      {openModal && (
        <DeleteModal
          onClick={() => setOpenModal((open) => !open)}
          onConfirm={() => handleDeleteCategory(id)}
          resourceName="category"
        />
      )}
    </>
  );
}

export default Category;
