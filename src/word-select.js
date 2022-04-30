import { useState } from "react";

export default function({wordSelected, isShown}) {
    const [secretWord, setSecretWord] = useState("");
    return (
        <div className={isShown ? '' : 'hidden'}>
            <input 
                type="text" 
                onChange={e => {
                    setSecretWord(e.target.value); //e.target.value가 text폼 안의 값 바뀌면 그 값
                }}    
            />
            <button
                onClick={e => {
                    wordSelected(secretWord)
                }}    
            >
                Start!
            </button>
        </div>
    );
}