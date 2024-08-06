import React, { useState ,useEffect} from 'react'


function Counter( props) {
    const [counter, setCounter]=useState(0)
useEffect(()=>{
console.log("Counter Mounted")
return function(){
    console.log("unMounted counter")
}
},[])
//empty dependence arr means =>whole componentsk 
// if dep  has some values
useEffect(()=>{
console.log("Counter")
return function (){
    console.log("dependence")
}
},[counter])
    const handleEvent=()=>{
setCounter(counter+1)
console.log(counter,"counter")
    }
    const handleDec =()=>{
        if(counter==0){
            return 0
        }
        setCounter(counter-1) 
        console.log(counter,"counter dec")
    }

  return (
    <div className='CounterContainer'>
      <h3>{counter}
      <button onClick={handleEvent}>INC</button>
      <button onClick={handleDec}>DEC</button>
      </h3>
    </div>
  )
}

export default Counter
