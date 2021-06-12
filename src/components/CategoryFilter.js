import { React, useState } from "react";

function CategoryFilter({ categories, currentCategory, setCurrentCategory, stateTasks, setStateTask }) {

    // The list of tasks being displayed should be filtered, so that only tasks that match the category that was clicked are displayed.
    // If the button for "All" is selected, all the tasks should be displayed.
    let handleSelectCategory = (category) => {
        setCurrentCategory(category)
    }

    let filterTasks = (category) => {
        let filteredArray = stateTasks.filter(task => {
            console.log('this is working')
                if(currentCategory !== "All"){
                    return task.category === currentCategory
                } else {
                    return stateTasks
                }
            })
        setStateTask(filteredArray)
    }

    let renderCategories = categories.map(category => {
        if (category === currentCategory){
            return (
                <button key={category} 
                    className="selected"
                    style={{backgroundColor:"green"}} 
                    onClick={() => filterTasks(category)}>{category}</button> 
            )
        } else {
            return (<button key={category} 
                onClick={() => filterTasks(category)}>{category}</button>
        )}
    })

    return (
        <div className="categories">
            <h5>Category filters </h5>
            {/* render <button> elements for each category here */}
            {renderCategories}
        </div>
    );
    }

export default CategoryFilter;
