import Button from "../Button";
import styles from "./CategoriesCard.module.css";
import { useState } from "react";
import CategoryAdd from "../Categories/CategoryAdd";
import Overlay from "../Overlay";
import Category from "../Categories/Category";
import { useCategories } from "../../contexts/CategoryContext";

function CategoriesCard() {
  const { categories } = useCategories();
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className={styles.card}>
        <p className="text-[24px] font-medium">Task Categories</p>
        <div className={styles.scroll}>
          {categories.length ? (
            categories.map((category) => (
              <Category key={category.id} category={category} />
            ))
          ) : (
            <p className="text-center py-4 text-[18px]">
              You have no categories!
            </p>
          )}
        </div>
        <div className={styles.largeLine}></div>
        <div style={{ float: "right" }}>
          <Button onClick={() => setOpen(true)}>+ New Category</Button>
        </div>
      </div>
      {open && (
        <Overlay>
          <CategoryAdd setOpen={setOpen} />
        </Overlay>
      )}
    </>
  );
}

export default CategoriesCard;
