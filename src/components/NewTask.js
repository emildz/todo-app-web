import { useState } from "react";
import { Input } from "antd";

export default function NewTask({ setTasks }) {
  const [newTask, setNewTask] = useState("");
  const handleButtonSubmit = () => {
    if (newTask.trim() === ''){
      return
    }
  const taskObject = {
    task: newTask
    
  };
  console.log("sending to API",taskObject);
  fetch('http://localhost:3005/tasks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(taskObject),
  })
    .then(() => {
      setNewTask('')
      fetch('http://localhost:3005/tasks')
        .then(response => response.json())
        .then(data => setTasks(data))
    })
    .catch(err => console.error(err))
  }
const handleInputText = (event) => {
  console.log("clicked")
    setNewTask(event.target.value);
  };
  return (
    <>
     <Input.Search
        value = {newTask}
        placeholder = "Enter task name"
        enterButton = 'Add Task'
        size = 'Large'
        onSearch={handleButtonSubmit}
        onChange={(event) => handleInputText(event)}/>
      </>
  );
}
