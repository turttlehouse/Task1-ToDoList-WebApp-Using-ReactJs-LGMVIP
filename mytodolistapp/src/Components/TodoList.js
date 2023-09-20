import React, { useState } from 'react'
import TodoForm from './TodoForm'

export default function TodoList() {

    //State array which will hold all Todos
    const[todos,setTodos] = useState([]);

    //The Data coming from the form will be added in the array
    //we will get the 3 values the mandatory value will be the task


    //ADD A TODO LIST
    const addTask= task=>{

        //if there will be no task we cannot add anything
        //so this will check if the task is coming or not if not then it will not add
        if(!task.text){
            return

        }

        const newTodos = [task,...todos];   //destructing the todos array
        
        setTodos(newTodos);  //this will update our state

        //or you can use like this
        // const oldTask = todos; todos.push(task);

    }

    //REMOVE TODO FROM LIST

    const removeTask = id =>{
      let updatedTasks = [...todos].filter(task=>task.id != id)
      setTodos(updatedTasks)
    }





    
    //TASK IS COMPLETED
      const completeTask = id=>{
        let updatedTasks= todos.map(todo =>{
          if(todo.id == id){
            todo.isComplete=true;
          }
          return todo;
        })

        setTodos(updatedTasks)

      }









    //we will pass the function
  return (
    <div>
        {/* In this TodoForm we need to pass the addTask method as a props */}
        <TodoForm addTask={addTask} />  

    </div>
  )
}
