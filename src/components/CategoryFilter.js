import React from "react";

function CategoryFilter({categories, selectedCategory, onCategoryChange}) {
  return (
    <div className="category-filter">
      <h5>Category filters</h5>
      {categories.map((category) => (
         <button
         key={category} onClick={()=> onCategoryChange(category)} className={selectedCategory === category ? "selected": ""}>
         {category}
       </button>
      ))}
     
      {/* render <button> elements for each category here */}
    </div>
  );
}

export default CategoryFilter;
