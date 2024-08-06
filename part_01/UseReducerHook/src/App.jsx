import { useReducer} from 'react'
import './App.css'
const reducer =(state, action) =>{
  switch (action.type){
    case "Increment" :
      return {...state,count:state.count+1}
  
       case "Decrement" :
      return {...state,count:state.count*2}
  
  case "Toggle_Hidden" :
  return {...state,hidden:!state.hidden}
  default :
  return state
      
}}
function App() {
const [state,dispatch] = useReducer(reducer, {count:0, hidden:false})

  return (
  <>
<h1>Count:{state.count}</h1>
<button onClick={()=>{
  dispatch({type:"Increment"})}}
  >Increment</button>
<button onClic={()=>{
  dispatch({type:"Decrement"})}}
  >Decrement</button>
<button onClick={()=>{
  dispatch({type:"Toggle_Hidden"})}}
>Hide</button>
{state.hidden? <h1>Hidden</h1> :<h1>Not Hidden</h1>}
  </>
  )
}

export default App
