import React, { useState } from "react";

export default function Editform({editTodo, task, arrayTasks}) {
  const [val, setVal] = useState(task.title);
  
  function handleSubmit(e) {
    e.preventDefault();
    
    if(val){
      editTodo(val, task.id);
    } else {
      alert('Task can\'t be empty')
    }

    // setVal('')
  }

  return (
    <div className="formEdit">
      <form className="formEditTag" onSubmit={handleSubmit}>
        <input
          className="formEditInput"
          type="text"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
        <button className="formEditButton" type="submit">Update</button>
      </form>
    </div>
  );
}
