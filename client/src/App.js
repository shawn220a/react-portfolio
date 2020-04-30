import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Contact from './components/contact/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Contact />
      </div>
    </Router>
  );
}

export default App;
