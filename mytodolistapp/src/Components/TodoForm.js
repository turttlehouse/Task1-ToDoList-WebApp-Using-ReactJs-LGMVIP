import React ,{useState} from 'react'


export default function TodoForm() {

       //Declaring the state named input
       const [input ,setInput] = useState('');  //if the user is writing something in the box then it will keep the record of that state
       
       const handleSubmit = (e)=>{
        //avoids page reloads
        e.preventDefault();

        
       }

  return (
    <form>
        <input type="text" placeholder='Title...' value={input} name="text"/>
        <button type='submit' onClick={handleSubmit} className='todo-btn'>Add</button>
    </form>
  );
}
