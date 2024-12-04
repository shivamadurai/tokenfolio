import React from 'react';
import './App.css';
import { GetCrypto } from './components/GetCrypto';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GetCrypto />
      </header>
    </div>
  );
}

export default App;
