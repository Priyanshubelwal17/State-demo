import { v4 as uuid } from "uuid"
import { useState } from "react";

export default function EmojiClicker() {
    const [emojies, setEmojies] = useState([{ id: uuid(), emoji: "😂" }])
    const addEmojies = () => {
        setEmojies((oldemojies) => [...oldemojies, { id: uuid(), emoji: "🍏" }])
    }
    const deleteEmoji = (id) => {
        setEmojies((previousemojies) => {
            return previousemojies.filter(e => e.id !== id)
        })
    }
    const makeEverythingPotty = () => {
        setEmojies((previousemojies) => {
            return previousemojies.map((e) => {
                return { ...e, emoji: '💩' }
            })
        })
    }
    return (
        <div>
            {emojies.map((e) => (
                <span
                    onClick={() => deleteEmoji(e.id)}
                    key={e.id} style={{ fontSize: "4rem" }} >{e.emoji}</span>
            ))}
            <button onClick={addEmojies} >Add Emojie</button>
            <button onClick={makeEverythingPotty} >Make them all Potty</button>
        </div>
    )
}