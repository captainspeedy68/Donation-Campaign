import { createContext, useContext, useState } from 'react';

const CategoryContext = createContext();

const CategoryContextProvider = ({ children }) => {
  const [category, setCategory] = useState("");
  
  const updateCategory = (newCategory) => {
    setCategory(newCategory);
  };

  return (
    <CategoryContext.Provider value={{ category, updateCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategoryContext = () => {
  const context = useContext(CategoryContext);
  return context;
};

export default CategoryContextProvider;
