import React from 'react';
import Books from './components/Books'
import Header from './components/Header'
import './App.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'

function App() {
  return (
    <body className="App">
      <Header />
      <Books />
    </body>
  );
}

export default App;
