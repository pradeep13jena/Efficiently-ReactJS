import React from "react";
import ToDoItem from "./ToDoItem.jsx";
import Editform from "./Editform";

export default function ToDoList({ tasks, completeIt, deleteIt, editIt, setTask}) {

  function editIt(id){
    setTask(tasks.map(task => {
      if(task.id === id){
        return {...task, is_edited: !task.is_edited}
      } else {
        return task
      }
    }))

  }

  function editTodo(val, id){
    setTask(tasks.map(task => {
      if(task.id === id){
        return {...task, title: val, is_edited: !task.is_edited}
      } else {
        return task
      }
    }))

  }

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

// {/* <ToDoItem key={task.id} tasks={task} completeIt={completeIt} deleteIt={deleteIt} editIt={editIt}/>  */}
// {/* <Editform key={task.id} editTodo={editTodo} task={task}/> */}