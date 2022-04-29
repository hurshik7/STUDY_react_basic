import { useState } from "react";

export default function ({value}) {
    const [isClicked, setIsClicked] = useState(false);
    let className = 'alphabet-button';
    if (isClicked) {
        className += ' guessed';
    }
    
    function clickHandler() {
        setIsClicked(true);
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