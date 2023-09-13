import { useState } from "react"

export default function Count() {

    const [count, setCount] = useState(0)

    const handleClick = () =>{
        const newCount = count+1;
        setCount(newCount);
    }

    const handleClickReduce = () =>{

        const newCount = count-1;
        setCount(newCount);

    }

    return(
        <div>
            <h1>Count: {count}</h1>
            <button onClick={handleClick}>ADD</button>
            <button onClick={handleClickReduce}>Reduce</button>
        </div>
    )

}