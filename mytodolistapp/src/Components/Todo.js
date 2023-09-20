import React from 'react'
import { RiCloseCircleLine }from 'react-icons/ri'
import {TiTick} from 'react-icons/ti'


//using props by destructing the props

// export const Todo = ({todos,removeTask,completeTask}) => {  

  //Or We can directly use the props without destructuring

export const Todo = (props) => {
  

    //Now we need to map over the todo's array and return a task from here
    return props.todos.map ((todo,index)=>(

     

      <div className={todo.isComplete ? 'complete task-div' :'task-div'} key={index}>
        <div className='todo-text'>{todo.text}</div>
         <div className='icons' key={todo.id}>

        <TiTick className={todo.isComplete ?'hide':'tick'} onClick={() => { props.completeTask(todo.id) } }></TiTick>

        <RiCloseCircleLine className='ri' onClick={() => { props.removeTask(todo.id) } }></RiCloseCircleLine>


      </div>
      </div>
    

    )
  )
}
