import { v4 as uuid } from "uuid"
import { useState } from "react";

export default function EmojiClicker() {
    const [emojies, setEmojies] = useState([{ id: uuid(), emoji: "😂" }])
    const addEmojies = () => {
        setEmojies((oldemojies) => [...oldemojies, { id: uuid(), emoji: "🍏" }])
    }
    return (
        <div>
            {emojies.map((e) => (
                <span key={e.id} style={{ fontSize: "4rem" }} >{e.emoji}</span>
            ))}
            <button onClick={addEmojies} >Add Emojie</button>
        </div>
    )
}