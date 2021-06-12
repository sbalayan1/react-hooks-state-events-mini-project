import { React, useState} from "react";

function Task( { stateTasks, setStateTask, currentCategory } ) {
    // let filterTasks = () => {
    //     let filteredTasks = stateTasks.filter(task => {
    //         console.log(task)
    //         if ()
    //     })
    // }   

    //Update the Task component so that it shows the text and category for its task.
    //When the delete button is clicked, the task should be removed from the list.
    let removeTask = (text) => {
        let newArray = stateTasks.filter(task => task.text !== text)
        setStateTask(newArray)
    }

    // First, we'll want to display all the tasks in our app. 
    //Pass down the task data from App to TaskList, and display each task using the Task component. 
    //Make sure to use a key prop!

    let createTaskList = stateTasks.map(task => {
        return (
        <div className="task" key={task.text}>
            <div className="label">{task.category}</div>
            <div className="text">{task.text}</div>
            <button className="delete" onClick={() => removeTask(task.text)}>X</button>
        </div>
        )
    })
    
    return (
        <div>{createTaskList}</div>
    )
}

export default Task;
