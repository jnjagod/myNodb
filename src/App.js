import React from 'react';
import Books from './components/Books'
import Header from './components/Header'
import './App.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Books />
    </div>
  );
}

export default App;
