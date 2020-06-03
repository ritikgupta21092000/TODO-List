import React, { useState } from "react";

function App() {
  const [itemName, setItemName] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    setItemName(event.target.value);
  }

  function handleClick() {
    setItems(prevValue => {
      return [...prevValue, itemName];
    });
    setItemName("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={itemName} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map(item => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
