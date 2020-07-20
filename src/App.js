import React from 'react';
import logo from './logo.svg';
import './App.css';
import ChoiCard from './components/ChoiceCard'
const choices = {
  rock:
    "https://opengameart.org/sites/default/files/forum-attachments/very%20simple%20rock_0.png",
  paper: "http://pngimagesfree.com/Paper/Thumb/blank-note-paper-free-clipa.png",
  scissors: "http://www.pngmart.com/files/1/Scissors-PNG-Pic.png"
};

function App() {
  return (
    <div className="App">
      <ChoiCard title="You" winner={false} imgURL={choices.rock} />
      <ChoiCard title="Computer" winner={true} imgURL={choices.paper} />
    </div>
  );
}

export default App;
