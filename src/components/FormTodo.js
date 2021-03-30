import React, { useState, useEffect } from "react";
import axios from 'axios';

const FormTodo = () => {
  const [inputValue, setInputValue] = useState("");
  const [toDos, setToDos] = useState([]);

  useEffect(() => {
    axios.get('https://c8tdxqo12a.execute-api.ap-southeast-1.amazonaws.com/dev/users',{}, {headers:{"Access-Control-Allow-Origin": "*"}}).then(res => {
      setToDos(res.data?.Items);
    })

  },[])

  const inputChange = (e) => {
    setInputValue(e.target.value);
  };

  const buttonSubmit = async (e) => {
    e.preventDefault();
    if (inputValue !== "") {
      await axios.post('https://c8tdxqo12a.execute-api.ap-southeast-1.amazonaws.com/dev/users', {"userId": inputValue, "name": inputValue})
      setInputValue("");
    }
    axios.get('https://c8tdxqo12a.execute-api.ap-southeast-1.amazonaws.com/dev/users',{}, {headers:{"Access-Control-Allow-Origin": "*"}}).then(res => {
      setToDos(res.data?.Items);
    })
  };


  return (
    <form onSubmit={buttonSubmit}>
      <input
        type="text"
        value={inputValue}
        placeholder="Enter user..."
        onChange={inputChange}
      />
      <button onClick={buttonSubmit}>Add user</button>
      <ol>
        {toDos.map((todo, index) => (
          <li key={index}>
            {todo.name}
          </li>
        ))}
      </ol>
    </form>
  );
}

export default FormTodo;
