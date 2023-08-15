import React, { useState } from 'react'
import { ITodo } from './types'
import Todo from './Todo/Todo'
import FormTodo from './Form Todo/FormTodo'

const Todos = () => {
    // ARR OBJ TODOS
    const [todos, setTodos] = useState<ITodo[]>([
        {
            id: 1,
            title: "One",
            complete: false
        },
        {
            id: 2,
            title: "Two",
            complete: false
        }
    ])
    // On Delete
    const onDelete = (id: number) => {
        const updateTodos: ITodo[] = [...todos].filter((todo: ITodo) => {
            return todo.id !== id;
        })
        setTodos(updateTodos)
    }
    // On Complete
    const onComplete = (id: number, complete: boolean) => {
        const updateTodos: ITodo[] = [...todos].map((todo: ITodo) => {
            if (todo.id === id) todo.complete = complete;
            return todo;
        })
        setTodos(updateTodos);
    }
    // Add Todo
    const addTodo = (event: React.FormEvent<HTMLFormElement>, title: string) => {
        event.preventDefault()
        const todo: ITodo = {
            id: Date.now(),
            title: title,
            complete: false
        };
        setTodos((prev: ITodo[]) => [...prev, todo])
    }

  return (
    <div>
        <h1>Todos</h1>
        {/* Form Add */}
        <FormTodo addTodo={addTodo}/>
        {todos.map((todo: ITodo) => {
            return (
                <Todo 
                    key={todo.id}
                    todo={todo}
                    onDelete={() => onDelete(todo.id)}
                    onComplete={(complete) => onComplete(todo.id, complete)}
                />
            )
        })}
    </div>
  )
}

export default Todos