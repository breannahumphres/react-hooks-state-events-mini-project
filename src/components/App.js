import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });


function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [tasks, setTasks] = useState(TASKS);

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  function handleDeleteTask(taskText) {
    const updatedTasks = tasks.filter((task) => task.text !== taskText)
   setTasks(updatedTasks);
    }

    function handleTaskFormSubmit(newTask) {
      setTasks([...tasks, newTask]);
    }

  const tasksToDisplay = tasks.filter((task) => selectedCategory === "All" ? true : task.category === selectedCategory)

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      categories = {CATEGORIES}
      selectedCategory={selectedCategory}
      onCategoryChange={handleCategoryChange} 
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit} />
      <TaskList tasks = {tasksToDisplay} onDeleteTask={handleDeleteTask}/>
    </div>
  );
}

export default App;
