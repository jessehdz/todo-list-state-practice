import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const newArray = [];

  function handleChange(event) {
    let newItem = event.target.value;
    setInputText(newItem);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          type="text"
          onChange={handleChange}
          name="newItem"
          placeholder="milk"
          value={inputText}
        />
        <button>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <li>{inputText}</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
