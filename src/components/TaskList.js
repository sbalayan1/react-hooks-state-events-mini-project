import React from "react";
import Task from './Task'

function TaskList( { stateTasks, setStateTask, currentCategory }) {

    return (
    <div className="tasks">
        {/* display a list of tasks using Task component */}
        {/* Pass down the task data from App to TaskList, and display each task using the Task component.  */}
        <Task 
            stateTasks = {stateTasks}
            setStateTask = {setStateTask}
            currentCategory = {currentCategory}
        />

    </div>
    );
    }

export default TaskList;
