import {useState} from "react";
import './Counter.css';

function Counter(){
    const [count, setCount] = useState(0);
    return (

        <div id= "counter-div">
            <h3>Counter : {count}</h3>

            <div className="btns">
            <button onClick={()=>setCount(count+3)}>+3</button>
            <button onClick={()=> setCount(count-3)}>-3</button>
            </div>
        </div>
    )
}
export default Counter;