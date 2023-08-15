import React, { useState } from "react";
import { IFormTodo } from "../types";

const FormTodo = ({ addTodo }: IFormTodo) => {
  const [title, setTitle] = useState<string>("");

  return <div>
    <form
        onSubmit={(event: React.ChangeEvent<HTMLFormElement>) => {
            addTodo(event, title);
            setTitle("");
        }}
    >
        <input 
            type="text" 
            value={title}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setTitle(event.target.value);
            }}
        />
        <button type="submit">add</button>
    </form>
  </div>;
};

export default FormTodo;
