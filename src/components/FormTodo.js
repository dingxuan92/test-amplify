import React, { useState, useEffect } from "react";
import axios from 'axios';

const FormTodo = () => {
  const [inputValue, setInputValue] = useState("");
  const [toDos, setToDos] = useState([]);

  useEffect(() => {
    axios.get('https://c8tdxqo12a.execute-api.ap-southeast-1.amazonaws.com/dev/users',{}, {headers:{"Access-Control-Allow-Origin": "*"}}).then(res => {
      console.log('dx')
      console.log(res);
    })

  },[])

  const inputChange = (e) => {
    setInputValue(e.target.value);
  };

  const buttonSubmit = (e) => {
    e.preventDefault();
    if (inputValue !== "") {
      setToDos([inputValue, ...toDos]);
      setInputValue("");
    }
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
            {todo}
          </li>
        ))}
      </ol>
    </form>
  );
}

export default FormTodo;
