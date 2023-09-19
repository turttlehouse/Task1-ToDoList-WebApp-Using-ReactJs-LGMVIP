import React ,{useState} from 'react'


export default function TodoForm(props) {

       //Declaring the state named input
       const [input ,setInput] = useState('');  //if the user is writing something in the box then it will keep the record of that state
       
       const handleSubmit = (e)=>{
        //avoids page reloads
        e.preventDefault();

        //This method will take the id parameters for now id is randomly generated and users need to pass one text that will be our task which we will be gettng from the input
        //we also need to pass one boolean operator is the task completed or not
        props.addTask({
            id:Math.floor(Math.random()*10000),
            text :input,
            isComplete:false
        })

        //we need to set out input back to empty string
        setInput('')


       }

  return (
    <form>
        <input type="text" placeholder='Title...' value={input} name="text"/>
        <button type='submit' onClick={handleSubmit} className='todo-btn'>Add</button>
    </form>
  );
}
