import LetterGrid from "./letter-grid";
import ButtonGrid from "./button-grid";
import { useState } from "react";

export default function({secretWord, maxErrors, isShown}) {
    const [guessedLetters, setGuessedLetters] = useState([]);
    const [errorCount, setErrorCount] = useState(0);

    const letterGuessedHandler = function(letter) {
        let val = letter.toLowerCase();
        setGuessedLetters(prev => [...prev, val]);

        if (secretWord.toLowerCase().indexOf(val) === -1) {
            setErrorCount(errorCount + 1);
            
        }
    }
    // 리액트에서는 항상 상태변수, 그거 세터로 값 바꾸기
    return (
        <div className={isShown ? '' : 'hidden'}>
            <div>
                The number of guessing count left: {maxErrors - errorCount} 
            </div>
            <LetterGrid 
                secretWord={secretWord}
                guessedLetters={guessedLetters} // 클릭한 알파벳을 전달 받는다
            />
            <ButtonGrid 
                letterGuessed={letterGuessedHandler} //{ } 안에 들은거 함수
                isShown={errorCount < maxErrors}
            />
        </div>
    );
}