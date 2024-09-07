import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
const [text, setText] = useState("");
const [category, setCategory] = useState(categories[0]);
function handleTextChange(event) {
  setText(event.target.value);
}

function handleCategoryChange(event) {
  setCategory(event.target.value);
}

function handleSubmit(event) {
  event.preventDefault();
  onTaskFormSubmit({text, category});
  setText("");
  setCategory(categories[0]);
}


  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={handleTextChange} />
      </label>
      <label>
        Category
        <select name="category"
        value = {category}
        onChange={handleCategoryChange}>
          <option value="All">All</option>
          {/* render <option> elements for each category here */}
          {categories.filter((category) => category !== "All")
          .map((category) => (
            <option key={category} value = {category}>{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
