import './App.css'
import './index.css'
import Todo from '../components/todo/Todo'
import Gunung from '../components/gunung/Gunung'
import {useEffect, useState} from 'react'
import { RiDeleteBin7Fill } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";

function App() {
  //kalau false berarti di todo, kalau true berarti udah complete
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);

  const [allTodos, setTodos] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const handleAddTodo = ()=> {
    let newTodoItem = {
      title: newTitle,
      description: newDescription
    }
    let updateTodoArr = [...allTodos]
    updateTodoArr.push(newTodoItem)
    setTodos(updateTodoArr)
    localStorage.setItem('todoList', JSON.stringify(updateTodoArr))
  };

  useEffect(()=>{
    let savedTodo = JSON.parse(localStorage.getItem('todoList'));
    if(savedTodo){
      setTodos(savedTodo);
    }
  }, [])

  const handleDeleteTodo = (index) =>{
    let reducedTodo = [...allTodos];
    reducedTodo.splice(index);

    localStorage.setItem('todoList', JSON.stringify(reducedTodo));
    setTodos(reducedTodo)
  }

  return (
    <>
      <div>
        <Gunung /> 
        <Todo />
      </div>

      <div className='todo-wrapper'>

        <div className='todo-input'>
          <div className='todo-input-item'>
            <label>Title</label>
            <input type="text" value={newTitle} onChange={(e)=> setNewTitle(e.target.value)} placeholder='whats the task title?' />
          </div>
          <div className='todo-input-item'>
            <label>Description</label>
            <input type="text" value={newDescription} onChange={(e)=> setNewDescription(e.target.value)} placeholder='whats the task description?' />
          </div>
          <div className='todo-input-item'>
            <button type='button' onClick={handleAddTodo} className='primaryBtn'>Add</button>
          </div>
        </div>

        <div className='btn-area'>
          <button className={`isCompleteScreen ${isCompleteScreen === false && 'active'}`} onClick={()=>setIsCompleteScreen(false)}>Todo</button>
          <button className={`isCompleteScreen ${isCompleteScreen === true && 'active'}`} onClick={()=>setIsCompleteScreen(true)}>Completed</button>
        </div>

        <div className='todo-list'>
          
            {allTodos.map((item, index)=>{
              return (
                <div className='todo-list-item' key={index}>
              <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
              </div>
        
              <div className='kotakIcon'>
                <RiDeleteBin7Fill onClick={()=> handleDeleteTodo(index)} className='icon'/>
                <FaCheck className='check-icon'/>
              </div>
              
            </div>
              )
            })}

          </div>
      </div>
      
    </>
  )
}

export default App
