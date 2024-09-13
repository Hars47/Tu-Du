import React, { useRef, useState } from 'react'
import todo_icon from '../assets/todo_icon.png';
import TodoItems from './TodoItems';

const Todo = () => {

    const [todoList, setTodoList] = React.useState([]);

    const inputRef = useRef();

    const add = () => {
        const inputText = inputRef.current.value.trim();
        
        if (inputText === "") {
            return null;
            
        }

        const newTodo = {
            id: Date.now(),
            text: inputText,
            isComplete: false,
        }
        setTodoList((prev)=> [...prev, newTodo]);
        inputRef.current.value = ""; /* To clear input field */


    }

    const deleteTodo = (id) => {
        setTodoList((prvTodos)=>{
            /* Returns all ids except the id passed as argument.*/
            return prvTodos.filter((todo) => todo.id !== id);
        });
    }

    return (
        <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>

            {/* ------title------- */}

            <div className='flex mt-7 gap-2 items-center'>
                <img className='w-8' src={todo_icon} alt="" />
                <h1 className='text-3xl font-bold'>Tu-Du List</h1>
                <button className='text-3xl'>+</button>
            </div>

            {/* ------input------- */}

            <div className='flex items-center my-7 bg-gray-200 rounded-full'>
                <input ref={inputRef} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' type="text" placeholder='Add your task' />
                <button onClick={add} className='border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer'>ADD +</button>
            </div>

            {/* ------Todo List------- */}

            <div>
                {todoList.map((item, index)=>{
                    return <TodoItems key={index} text={item.text} id={item.id} isComplete={item.isComplete} deleteTodo={deleteTodo}/>
                })}
            </div>

        </div>
    )
}

export default Todo
