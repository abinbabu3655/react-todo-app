import { useState } from 'react';
import './App.css'
function App() {
  const [toDos, setTodos] = useState([])
  const [todo, setTodo] = useState('')
  const [head,setHead] = useState(false)
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const date =new Date()

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />{
          <h2>`Whoop, it's {days[date.getDay()]} 🌝 ☕ `</h2>
        }
        
      </div>
      <div className="input">
        <input value={todo} onChange={(e) => setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={() => {setTodos([...toDos, { id: Date.now(), text: todo, status: false }]); setTodo('')}}  className="fas fa-plus"></i>
      </div>

      <div className="todos">
        {
          
          toDos.map((obj) => {
            if (!obj.status) {
              return (<div className="todo">
                <div className="left">
                  <input value={obj.status} onChange={(e) => {
                    console.log(e.target.checked)
                    console.log(obj)
                    setTodos(toDos.filter((obj2) => {
                      if (obj2.id === obj.id) {
                        obj2.status = e.target.checked
                        if(obj2.status){
                         setHead(true)
                        }

                        
                      }
                      return obj2
                    }))
                  }} type="checkbox" name="" id="" />
                  <p>{obj.text}</p>
                </div>
                <div className="right">
                  <i onClick={()=>{
                    const removeArray = [...toDos].filter(toDo => obj.id!== toDo.id)
                    setTodos(removeArray)
                  }}className="fas fa-times"></i>
                </div>
              </div>)
            }
            return null

          })
        }
        (
        <div className='subHead'>
          { head && <h1>Completed Tasks</h1>}
          
          
        </div>
        )
        {
          toDos.map((obj) => {
            if (obj.status) {
              return (
                <div>
                  <div className='sub'>
                    <h2>{obj.text}</h2>
                  </div>


                </div>

              )
            }
            return null
          })
        }
      </div>
    </div>
  );
}

export default App;
