import {useState} from "react";
import './Greeting.css';
function Greeting() {
    const [name,setName] = useState('')
    const [greeting, setGreeting] = useState('');
    return (

            <div id="greeting-div">
                <label>Enter your name
                <input value={name} onChange={(e)=>setName(e.target.value)} />
                </label>
                <button onClick={()=>setGreeting(`Hello, ${name} !`)
                }>Submit</button>


                {greeting && <h1>{greeting}</h1>}
            </div>

    )
}
export default Greeting;