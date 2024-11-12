// The most important important component of my project. This is where
// I assemble all my components.

import React, { useEffect, useState } from "react";
import Header from "./Header";
import TodoForm from "./todoForm";
import ToDoList from "./ToDoList";
import "./App.css";

export default function App() {
  // Created new useState for tasks so that as our task gets added, 
  // edited, deleted or completed our website can get render.
  const [tasks, setTask] = useState([
    // I want my website to as soon as it gets launched few starting 
    // details about the website gets shown to the users.
    {
      // There are four parts of every task that's get generates
      title: "Welcome to Efficiently!", // The title of the task
      id: self.crypto.randomUUID(), // Unique id for each tasks
      is_completed: false, // The detail about if our task has completed or not
      is_edited: false, // The detail about if our task has to edited or not.
    },
    {
      title: "A clear mind starts here!",
      id: self.crypto.randomUUID(),
      is_completed: false,
      is_edited: false,
    },
    {
      title: "Add, Delete or Edit your task",
      id: self.crypto.randomUUID(),
      is_completed: false,
      is_edited: false,
    },
  ]);

  // This is to make sure that each time the website gets rendered it must check the 
  // Localstorage, If there's any task set those task as the new one and render it
  useEffect(() => {
    const savedTask = localStorage.getItem('tasks')
    if(savedTask){
      setTask(JSON.parse(savedTask));
    }
  }, [])

  // This is the function where i check if the task thats getting added, if it 
  // is already present or not
  function checkVal(val){

    let flag = true // Using flag method
    
  // Looping through each and every task-object present in the array
    tasks.map(task => {
      if(task.title.toLowerCase() === val.toLowerCase()){
  // if it finds the same task that is already present in the task array
  // It will make the flag as false
        flag = false
      }
    })

  // This will check if the flag is true or false, if true then it will create the new task and display it
    if(flag){
      const newTask = {
        title: val,
        id: self.crypto.randomUUID(),
        is_completed: false,
        is_edited: false,
      }
      setTask([...tasks, newTask])
      localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]))
    } else {
      alert('Task already present') // If the flag is false alert the user about task already present
    }
  }

  // this is function which creates new tasks and then connect them
  // with the other task. This will get passed on to the form tag
  // so that it can be called with the new value
  function newTodo(val) {
    // it will check if the val is empty string or not. You should now about the truthy and falsy to understand this.
    if(val){ 
      checkVal(val)
    } else {
    // if the val is empty it will alert the user about it
      alert('Task can\'t be Empty')
    }
    }

  // this function will make sure that as soon as the task is selected the task will get complete.
  function completeIt(id) {
    
      const completed = tasks.map((task) => {
        if(task.id === id){
          return { ...task, is_completed: !task.is_completed }
         } else{
          return task
         }
      })
      setTask(completed)

    localStorage.setItem('tasks', JSON.stringify(completed))
  }

  // this function will make sure that as soon as the delete button is clicked the task will get deleted.
  function deleteIt(id) {
    const deletedArray = tasks.filter((task) => task.id !== id);
    setTask(deletedArray)
    localStorage.setItem('tasks', JSON.stringify(deletedArray))
  }

  return (
    <>
      {/* Header of website */}
      <Header />
      <div className="formElements">
        <ToDoList
          tasks={tasks}
          completeIt={completeIt}
          deleteIt={deleteIt}
          setTask={setTask}
        />
        <TodoForm newTodo={newTodo} />
      </div>
    </>
  );
}