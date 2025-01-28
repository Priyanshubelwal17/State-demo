import { useState } from "react";

export default function EmojiClicker() {
    const [emojies, setEmojies] = useState(["😂"])
    const addEmojies = () => {
        setEmojies((oldemojies) => [...emojies, "😊", "🍌"])
    }
    return (
        <div>
            {emojies.map((e) => (
                <span style={{ fontSize: "4rem" }} >{e}</span>
            ))}
            <button onClick={addEmojies} >Add Emojie</button>
        </div>
    )
}