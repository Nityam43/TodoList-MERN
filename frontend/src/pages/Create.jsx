import { useState } from "react";
import axios from "axios";

const Create = ({ setTodos }) => {
  const [task, setTask] = useState();
  const handleAdd = () => {
    if (!task) return; // Don't add empty tasks

    axios
      .post("http://localhost:3000/add", { task: task })
      .then((result) => {
        console.log(result);
        // Add the new todo to the state instead of reloading
        setTodos((prevTodos) => [...prevTodos, result.data]);
        // Clear the input field
        setTask("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="create_form">
      <input
        type="text"
        name=""
        id=""
        placeholder="Enter Task"
        value={task || ""}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="button" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
};

export default Create;
