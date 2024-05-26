import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.scss";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import TaskList from "./features/task/task-list";

function App() {
  return (
    <div className="flex flex-row w-full min-h-screen space-x-2">
      <BrowserRouter>
        <ul className="w-1/6 justify-center bg-blue-200 ">
          <li>
            <Link to="/counter"> counter</Link>
          </li>
          <li>
            <Link to="/"> Task Manager</Link>
          </li>
        </ul>
        <div className="flex w-5/6 justify-start">
          <Routes>
            <Route path="/" element={<TaskList />} />
            <Route path="/counter" element={<Counter />} />
          </Routes>
        </div>

        {/* <header className="App-header">
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
      </header> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
