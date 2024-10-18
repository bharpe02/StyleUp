import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './assets/stylesheets/App.css';
import Sidebar from './components/Sidebar';
import Question1 from './SurveyPages/question1'

function App() {
  return (
    /*<div className="App">
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
    </div>*/
    <Router>
    <div style={{ display: 'flex' }}>
        <Sidebar /> {/* Sidebar is always visible */}
        <div style={{ flex: 1, padding: '20px' }}> {/* This div holds the page content */}
          <Routes>
            <Route path="/survey/question1" element={<Question1 />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
