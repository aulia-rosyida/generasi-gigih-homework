import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/title';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title title="App Typscript by Aulia Rosyida" subtitle="dibuat pada 6 Agustus 2021"/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
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