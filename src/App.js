import './App.css';
import GameBoard from './game-board';

export default function App() {
  return (
    <div className="container">
      <h1>Welcome to Hangman!</h1>
      <p>Do you want to play a game?</p>
      <div>
        <GameBoard secretWord="React" />
      </div>
    </div>
  );
}