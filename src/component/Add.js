import React from "react";
import { Input } from "antd";
import { Button } from "antd";
import { useState } from "react";

export default function TodoForm({ addValue }) {
  const [value, setValue] = React.useState("");

  const handleClick = (e) => {
    console.log("clicked");
    e.preventDefault();
    if (!value) return;
    addValue(value);
    setValue("");
    console.log(value);
  };

  return (
    <div className="container" >
      <form>
        <h1>ADD TODO</h1>
        <div className="addTodo">
        <Input
          placeholder="Enter your Todos"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      
        <Button onClick={handleClick} type="primary">
          ADD
        </Button>
        </div>
       
      </form>
    </div>
  );
}
