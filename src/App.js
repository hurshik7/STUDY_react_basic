import './App.css';
import GameBoard from './game-board';
import { useState } from 'react';
import WordSelect from './word-select';

export default function App() {
  const [secretWord, setSecretWord] = useState("");
  return (
    <div className="container">
      <h1>Welcome to Hangman!</h1>
      <p>Do you want to play a game?</p>
      <div>
        <WordSelect 
          wordSelected={val => {
            setSecretWord(val)
          }}
          isShown={!secretWord} // secretWord가 설정이 안되어 있다
        />
        <GameBoard 
          secretWord={secretWord} 
          maxErrors={6}
          isShown={secretWord}  //값이 있는지 없는지에 따라서 game board가 보일지 form이 보일지를 선택
        />
      </div>
    </div>
  );
}