import { useState } from "react";

export default function Hitung(){
    const[count, setCount] = useState<number>(0);

    const handleClick = () => {
        setCount (count + 1)
    }

    return(
        <div>
            <h2> {count} </h2>
            <button onClick={handleClick}>
                Counting
            </button>
        </div>
    )
}