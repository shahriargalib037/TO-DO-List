import React from 'react'
import Navbar from './components/Navbar'

const App = () => {

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 p-3 bg-slate-500 rounded-2xl min-h-[80vh]">
         <div className="addTOdo">
          <h1 className="text-lg font-bold">Add New Task</h1>
          <input type="text" className='bg-slate-300 border-amber-50'/>
          <button className='bg-amber-50 border-x-amber-300 text-slate-600 font-bold px-3 py-1 rounded-lg cursor-pointer m-6'>Add</button>
         </div>
          <h1 className='text-xl'> Your Task List</h1>
        <div className="todos">
          <div className="todo">
            <button className='bg-blue-500 text-white px-3 py-1 rounded-lg cursor-pointer m-3'>Edit</button>
            <button className='bg-red-500 text-white px-3 py-1 rounded-lg cursor-pointer m-3'>Delete</button>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default App
