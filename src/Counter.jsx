import { useState } from "react";
export default function Counter() {
    const [count, setCount] = useState(0)
    const addOne = () => {
        setCount(count + 1)
    }
    const setToTen = () => {
        setCount(10)
    }

    const addTHree = () => {
        setCount((currentCount) => currentCount + 1)
        console.log(count)
        setCount((currentCount) => currentCount + 1)
        setCount((currentCount) => currentCount + 1)
    }
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={addOne} >+1</button>
            <button onClick={addTHree} >+3</button>
            <button onClick={setToTen} >+10</button>
        </div>
    )
}