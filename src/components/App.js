import { React, useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
    //categoryFilter States
    const [stateTasks, setStateTask] = useState(TASKS)
    const [currentCategory, setCurrentCategory] = useState("All")

    //******categoryFilter functions*****
    //When a button is clicked, the following should happen:
    //Whichever button was clicked should have a class of selected. The other buttons should not have any class assigned.
    // let toggleClass = (e) => {
    //     if (toggleSelected === true) {
    //         alert(`already selected a category`)
    //         setToggleSelected(false)
    //     } else {
    //         setToggleSelected((toggleSelected) => !toggleSelected)
    //         console.log(toggleSelected)
    //     }
    // }
    
    // let filterCategories = (category) => {
    //     let filterSelected = selectCategory.map(categoryFilter => {
    //         if (categoryFilter === category) {
    //             return {...CATEGORIES, //add className: selected }
    //         } else {
    //             return CATEGORIES
    //         }
    //     })
    //     setSelectCategory(filterSelected)
    // }

    return (
    <div className="App">
        <h2>My tasks</h2>
        <CategoryFilter 
            categories={CATEGORIES}
            currentCategory={currentCategory}
            setCurrentCategory={setCurrentCategory}
            stateTasks={stateTasks}
            setStateTask={setStateTask}

        />
        <NewTaskForm 
            categories={CATEGORIES}
            stateTasks={stateTasks}
            setStateTask={setStateTask}
        />
        <TaskList 
            stateTasks = {stateTasks}
            setStateTask = {setStateTask}
            currentCategory = {currentCategory}

        />
    </div>
    );
}

export default App;
