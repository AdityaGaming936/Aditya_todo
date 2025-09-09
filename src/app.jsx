import React, { useState } from "react"

export const App = () => {

  const [tittle, settittle] = useState("")
  const [desk, setdesk] = useState("")
  
  const [mainTask, setMainTask] = useState([])

  const submitHandler  = (e) => {
    e.preventDefault()
    setMainTask([...mainTask, {tittle, desk}]);
    settittle("")
    setdesk("")
  }

  const deleteHandler = (i) => {
    let copyTask = [...mainTask]
    copyTask.splice(i, 1)
    setMainTask(copyTask)
  }

  let renderTask = <h2>No Task Available</h2>

  if (mainTask.length>0) {
    renderTask = mainTask.map((t, i)=>{
      return (
        <li key={i} className="flex items-center justify-between mb-8">
          <div className="flex items-center justify-between mb-5 w-2/3">
            <h5 className="text-2xl font-semibold">{t.tittle}</h5>
            <h6 className="text-lg font-medium">{t.desk}</h6>
          </div >
          <button 
          onClick={()=>{
            deleteHandler(i)
          }}
          className="bg-red-400 text-white px-4 py-2 rounded font-bold">Delete
          </button>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className="bg-black text-white p-5 text-5xl font-bold text-center">Aditya's Todo List</h1>
      <form onSubmit={submitHandler}>
        <input type="text" className="text-2xl border-zinc-800 border-2 m-8 px-4 py-2 rounded" placeholder="Enter Task Here" value={tittle} 
        onChange={(e)=>{
          settittle(e.target.value)
        }}/>
        <input type="text" className="text-2xl border-zinc-800 border-2 m-8 px-4 py-2 rounded" placeholder="Enter Description Here" value={desk}
        onChange={(e)=>{
          setdesk(e.target.value)
        }}/>
        <button className="bg-black text-white px-4 py-3 m-5 text-2xl font-bold rounded"> Add Task</button>
      </form>
      <hr />
      <div className="p-8 bg-slate-200">
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  )
}

export default App