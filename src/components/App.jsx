import React, { useState } from "react";
import Header from "./Header";
import TodoForm from "./todoForm";
import "./App.css";
import ToDoList from "./ToDoList";

export default function App() {
  // Created new useState for tasks to get added
  const [tasks, setTask] = useState([
    {
      title: "Welcome to Efficiently!",
      id: self.crypto.randomUUID(),
      is_completed: false,
      is_edited: false,
    },
    {
      title: "A clear mind starts here!",
      id: self.crypto.randomUUID(),
      is_completed: false,
      is_edited: false,
    },
    {
      title: "Add, Delete or Edit a task",
      id: self.crypto.randomUUID(),
      is_completed: false,
      is_edited: false,
    },
  ]);

  function checkVal(val){

    let flag = true
    
    tasks.map(task => {
      if(task.title.toLowerCase() === val.toLowerCase()){
        console.log('flag', flag)
        flag = false
      }
    })

    if(flag){
      setTask([...tasks,  {
        title: val,
        id: self.crypto.randomUUID(),
        is_completed: false,
        is_edited: false,
      }])
    } else {
      alert('Task already present')
    }
  }

  // this is function which creates new tasks and then connect them
  // with the other task. This will get passed on to the form tag
  // so that it can be called with the new value
  function newTodo(val) {
    if(val){
      checkVal(val)
    } else {
      alert('Task can\'t be Empty')
    }
    }

  function completeIt(id) {
    setTask(
      tasks.map((task) => {
        if(task.id === id){
          return { ...task, is_completed: !task.is_completed }
         } else{
          return task
         }
      }
    ))
  }

  function deleteIt(id) {
    setTask(tasks.filter((task) => task.id !== id));
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


// const newTask = {
//   title: "last task",
//   id: self.crypto.randomUUID(),
//   is_completed: false,
//   is_edited: false,
// }

// setTask(...task, newTask)