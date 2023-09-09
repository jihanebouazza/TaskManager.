import { createContext, useContext, useState } from "react";

const CategoryContext = createContext();

function CategoryProvider({ children }) {
  const [categories, setCategories] = useState(() => {
    const storedValue = JSON.parse(localStorage.getItem("Categories"));
    return storedValue || [];
  });

  function handleAddCategory(newCategory) {
    setCategories((categories) => [...categories, newCategory]);
    localStorage.setItem(
      "Categories",
      JSON.stringify([...categories, newCategory])
    );
  }

  function handleDeleteCategory(id) {
    const updatedCategories = categories.filter(
      (category) => category.id !== id
    );
    setCategories(updatedCategories);
    localStorage.setItem("Categories", JSON.stringify(updatedCategories));
  }

  return (
    <CategoryContext.Provider
      value={{ categories, handleAddCategory, handleDeleteCategory }}
    >
      {children}
    </CategoryContext.Provider>
  );
}

function useCategories() {
  const context = useContext(CategoryContext);
  if (context === undefined)
    throw new Error(
      "CategoryContext was used outside of the category provider"
    );
  return context;
}

export { CategoryProvider, useCategories };
