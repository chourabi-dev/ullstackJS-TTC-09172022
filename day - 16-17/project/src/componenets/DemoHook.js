import { useState } from "react";


export default function Counter(){
    const [count, updateCount] = useState(5);

    return(
        <div>
            { count} <br />

            <button onClick={ ()=>{
                updateCount( (count+1) )
            } } > + 1</button>
        </div>
    );
}