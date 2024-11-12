// Each Structre for each task is writted here.
import React from 'react'

export default function ToDoItem({tasks, completeIt, deleteIt, editIt}) {

  return (
    <div className="todoitems">
      <button className="todo_left" onClick={() => completeIt(tasks.id)}>
        <i className={tasks.is_completed? "circleComplete fa-solid fa-circle-check" : "fa-regular fa-circle circle"}></i>
        <p className={tasks.is_completed? 'todotext textComplete' : 'todotext'}>{tasks.title}</p>
      </button>
      <div className="todo_right">
        <button className='editButton' onClick={() => editIt(tasks.id)}><i className="fa-solid fa-pen-to-square"></i></button>
        <button className='trashButton' onClick={() => deleteIt(tasks.id)}><i className="fa-regular fa-trash-can trash"></i></button>
      </div>
    </div>
  )
}