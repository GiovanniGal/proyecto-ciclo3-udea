<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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

=======
import React, { useState } from 'react';
import ContextProvider from './context/ContextProvider';
import AppContainer from './routes/appContainer/AppContainer';


const App = () => {
  return (
    <ContextProvider>
      <AppContainer />
    </ContextProvider>
  );
}


>>>>>>> development
export default App;
