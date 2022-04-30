import { useState } from "react";

export default function ({value, onClick}) {
    const [isClicked, setIsClicked] = useState(false);
    let className = 'alphabet-button';
    if (isClicked) {
        className += ' guessed';
    }
    
    function clickHandler() {
        setIsClicked(true);
        onClick(value); // value는 그 letter들 (알파벳)
    }
    
    return (
        <button 
            className={className}
            onClick={clickHandler}
        >
            {value}
        </button>
    );
}