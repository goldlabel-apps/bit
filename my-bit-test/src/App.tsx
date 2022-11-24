import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import {Title} from "@dt9affiliations/atracktui.ui.title";

function App() {
  return (
    <div className="App">
        <div style={{background: "#eee", padding: 8}}>
          <pre style={{textAlign: "left"}}>
            {`import {Title} from "@dt9affiliations/atracktui.ui.title";`}
          </pre>
          <pre style={{textAlign: "left"}}>
            {`<Title title="Test Title" subtitle="Test Subtitle"/>`}
          </pre>
        </div>

      <header className="App-header">

        <div style={{border: "1px solid #eee"}}>
          <Title title="Test Title" subtitle="Test Subtitle"/>
        </div>

        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;
