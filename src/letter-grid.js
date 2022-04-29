import Letter from './letter.js';

export default function({secretWord, guessedLetters}) {
    // 글자수에 맞춰서 grid 사각형 (span으로) 만들어 줘야함
        // 문자열 -> 배열로 바꾸는 함수: 대상.split('')
        let letters = secretWord
                        .split('')
                        .map((letter, index) => {
                            let isShown = guessedLetters.indexOf(letter.toLowerCase()) > -1;
                            //console.log(index);
                            return (
                                <Letter 
                                value={letter}
                                isShown={isShown}
                                key={index}
                                />
                            )
                        });
        // 배열에서 특정 조건 맞는 값만 정리해서 새로운 배열로 만드는 기능 map
        // javascript map mdn
        // 위에 처럼하면 letters안에 span이 문자 개수마다 생김
    return (
        <div className='flex'>
            {letters}
        </div>
    );
}