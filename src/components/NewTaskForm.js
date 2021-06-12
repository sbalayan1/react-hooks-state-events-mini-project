import { React, useState } from "react";
import { v4 as uuid } from "uuid";

function NewTaskForm({ categories, stateTasks, setStateTask }) {
    const [selectCategory, setSelectCategory] = useState("Code")
    const [itemName, setItemName] = useState('')
    const [submitForm, setSubmitForm] = useState(stateTasks)

    let removeAllCategoryArray = categories.slice(1,categories.length)
    let displayCategories = removeAllCategoryArray.map(category => {return <option key={category}>{category}</option>})

    let handleInput = (e) => {
        setItemName(e.target.value)
    }

    let handleCategory = (e) => {
        setSelectCategory(e.target.value)
    }

    let onTaskFormSubmit = (e) => {
        e.preventDefault()
        console.log('this is working')
        console.log(itemName)
        console.log(submitForm)
        let newItem = {
            id: uuid(), 
            text: itemName, 
            category: selectCategory
        }
        let newArray = [...submitForm, newItem]
        setSubmitForm(newArray)
        setStateTask(newArray)
    }

    return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit}>
        <label>
        Details
        <input type="text" name="text" onChange={handleInput} value={itemName}/>
        </label>
        <label>
        Category
        <select name="category" onChange={handleCategory}>
            {/* render <option> elements for each category here */}
            {displayCategories}
        </select>
        </label>
        <input type="submit" value="Add task" />
    </form>
    );
    }

export default NewTaskForm;
