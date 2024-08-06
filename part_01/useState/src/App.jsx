import { useState } from 'react'
import './App.css'
import Counter from './Components/Counter'
import Todo from './Components/Todo'

function App() {
  const [state, setState] = useState(true)
  const [count, setCount] = useState(0)
const myTodoItems=[
  {
    id:1,
    title:"I need to finish my hw"
  },
  {
    id:2,
    title:"I need to watch React js "
  },
  {
    id:3,
    title:"I need to sleep early"
  }
]
  return (
    <>
      <h1>UseState</h1>
      <Todo items={myTodoItems}/>
      <button onClick={(e)=>setState(!state)}>Toggle</button>
      {state ? <Counter />:""}
      {/* <Counter /> */}
    </>
  )
}

export default App
