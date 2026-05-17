import React, { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {

  const [todo, settodo] = useState("")
  const [todos, settodos] = useState([])

  const handleEdit = () => {
    console.log("Edit button clicked");
  }
  
  const handleDelete = () => {
    console.log("Delete button clicked");
  }

  const handleAdd = () => {
    settodos([...todos, {todo, isCompleted: false}])
    settodo("")
  }

  const handleChange = (e) => {
    settodo(e.target.value)
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 p-3 bg-slate-500 rounded-2xl min-h-[80vh]">
         <div className="addTOdo my-5">
          <h1 className="text-lg font-bold">Add New Task</h1>
          <input onChange={handleChange} value={todo} type="text" className='bg-slate-300 border-amber-50 w-1/2'/>
          <button onClick={handleAdd} className='bg-amber-50 border-x-amber-300 text-slate-600 font-bold px-3 py-1 rounded-lg cursor-pointer m-6'>Add</button>
         </div>
          <h1 className='text-xl'> Your Task List</h1>
        <div className="todos">
          {todos.map(item=>{

          
          return <div className="todo flex w-1/2 my-3 justify-between">
            <input type="checkbox" value={todo.isCompleted} name="" id="" />
            <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
            <div className="buttons">
              <button onClick={handleEdit} className='bg-blue-500 text-white p-2 py-1 rounded-lg cursor-pointer m-1'>Edit</button>
              <button onClick={handleDelete} className='bg-red-500 text-white p-2 py-1 rounded-lg cursor-pointer m-1'>Delete</button>
            </div>
          </div>
          })}
        </div>
        
      </div>
    </>
  )
}

export default App
