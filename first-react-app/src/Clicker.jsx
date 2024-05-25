import { useState } from "react";

export default function Clicker({num}){
    const [val,setval] = useState(num);
    const IncCount = () => {setval((val)=>(
        val+=1
    ))}
    return (
        <>
            <h2>Current Count : {val}</h2>
            <button onClick={IncCount}>Counter++</button>
        </>
    )
}