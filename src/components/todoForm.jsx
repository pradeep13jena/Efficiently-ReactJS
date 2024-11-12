// This page acts as the input feild which adds the task that is at the below of the screen.
import React, { useState } from "react";

export default function TodoForm({ newTodo }) {
  const [val, setVal] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    newTodo(val);
    setVal("");
  }

  return (
    <div className="form">
      <form className="formAddTag" onSubmit={handleSubmit}>
        <input
          className="formInput"
          type="text"
          value={val}
          onChange={(e) => setVal(e.target.value)}
          placeholder="Add some task..."
        />
        <button className="formButton" type="submit">Add Tasks</button>
      </form>
    </div>
  );
}
