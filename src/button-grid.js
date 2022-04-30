import Button from "./button";

export default function({letterGuessed, isShown}) {
    /*
    a ~ z 배열 생성, 배열의 값마다 할일
    변수명 letters만들고
    <button>A</button> ... 이런식으로 저장되게 해야함!
    */
    let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let buttons = letters.map((letter, index) => (
       <Button 
            value={letter}
            key={index}
            onClick={letterGuessed} // button.js에서 넘어옴, game-board.js로 넘김
       /> 
    ));
    // map은 새로운 배열을 만듬!

    let className = 'flex flex-wrap';
    if (!isShown) {
        className += ' hidden';
    }

    return (
        <div className={className}>
            {buttons}
        </div>
    );
}