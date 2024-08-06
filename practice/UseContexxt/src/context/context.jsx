import { createContext } from "react";
const CounterContext = createContext(null)
const CounterProvider =(props)=>{
    return (
<CounterProvider>
    {props.children}
</CounterProvider>

    )
}