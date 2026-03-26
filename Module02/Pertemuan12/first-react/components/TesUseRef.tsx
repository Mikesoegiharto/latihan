import { useRef } from "react";

export default function FormPage(){
    const inputRef = useRef(null)

    const handleGetValue = () => {
        const value = inputRef.current.value
        alert("Input value " + value)
    };

    return(
        <div>
            <input 
                ref={inputRef}
                placeholder="Type.."
            />
            <button onClick={handleGetValue}>
                Get Value
            </button>
        </div>
    )
}