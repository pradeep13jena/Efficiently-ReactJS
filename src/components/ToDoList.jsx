// This is the page which renders each task dynamically and also performs the edit function.
import React from "react";
import ToDoItem from "./ToDoItem.jsx";
import Editform from "./Editform";

export default function ToDoList({ tasks, completeIt, deleteIt, editIt, setTask}) {
  // This function changes the 4th part of the task, which is the is_edited part.
  function editIt(id){
    setTask(tasks.map(task => {
      if(task.id === id){
        return {...task, is_edited: !task.is_edited}
      } else {
        return task
      }
    }))
  }

  // This function will actually change the task that is being edited as soon as the is_edited part becomes true.
  function editTodo(val, id){
    const edited = tasks.map(task => {
      if(task.id === id){
        return {...task, title: val, is_edited: !task.is_edited}
      } else {
        return task
      }
    })
    setTask(edited)
    localStorage.setItem('tasks', JSON.stringify(edited))
  }

  // This is designed in such a manner that it make sure that as soon as the edit button is clicked
  // The form gets visible on the screen.
  return (
    <div className="tasklist">
      {tasks.map(task =>
        task.is_edited ? 
        <Editform key={task.id} editTodo={editTodo} task={task} arrayTasks={tasks}/> : 
        <ToDoItem key={task.id} tasks={task} completeIt={completeIt} deleteIt={deleteIt} editIt={editIt}/>
      )}
    </div>
  );
}