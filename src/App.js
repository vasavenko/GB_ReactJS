import React, { useState } from 'react';
import { Message } from './components/Message/Message';
import './App.css';

function App() {

  const [messageText, setmessageText] = useState('Text from props')

  const hendleClick = () => {
    // alert('click')
    setmessageText("I'm from props")
  }
  return (
    <div className="App">
      <header className="App-header">
        <Message message={messageText} onMessageClick={hendleClick}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
