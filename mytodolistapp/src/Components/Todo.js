import React from 'react'
import { RiCloseCircleLine }from 'react-icons/ri'
import {TiTick} from 'react-icons/ti'

export const Todo = ({todos,removeTask,completeTask}) => {

    //Now we need to map over the todo's array and return a task from here
    return todos.map ((todo,index)=>(

     

      <div className={todo.isComplete ? 'complete task-div' :'task-div'} key={index}>
        <div className='todo-text'>{todo.text}</div>
         <div className='icons' key={todo.id}>

        <TiTick onClick={() => { completeTask(todos.id) } }></TiTick>

        <RiCloseCircleLine onClick={() => { removeTask(todo.id) } }></RiCloseCircleLine>


      </div>
      </div>
    

    )
  )
}
