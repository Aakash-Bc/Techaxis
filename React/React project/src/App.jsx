import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hello  from "./hello";   // component name should be capital
import Contact from "./contact";

function App() {
  const [count, setCount] = useState(0);
  const [toDoList, setToDoList] = useState([]);
  const [user, setUser] = useState([
    { id: 1, name: "Asal", skills: "react", address: "ktm" },
    { id: 2, name: "Anuj", skills: "html css" },
    { id: 3, name: "Akash", skills: "dom js" },
  ]);

  return (
    <div>
      {/* Logos */}
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>
      <Hello />
      <Contact/>

      {/* Counter */}
      <div className="card">
        <button onClick={() => setCount(count + 1)}>Add number</button>
        <h1>{count}</h1>
        <button onClick={() => setCount(0)}>Reset Count</button>
        <button onClick={() => setCount(count - 1)}>Count Decrease</button>
      </div>

      {/* User List */}
      <h1>User List</h1>
      {user.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.skills}</p>
          <p>{item.address}</p>
        </div>
      ))}

      {/* Todo List */}
      <h1>To do list</h1>
      <input type="text" id="task" placeholder="Enter your task" />
      <button
        onClick={() => {
          const task = document.getElementById("task").value;
          if (task.trim() !== "") {
            setToDoList([...toDoList, task]);
            document.getElementById("task").value = "";
          }
        }}
      >
        Add Task
      </button>

      <ol>
        {toDoList.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ol>

      
    </div>
  );
}

export default App;
