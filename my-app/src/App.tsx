import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TagTable } from './stories/TagTable';

function App() {
  return (
    <div>
      <div className="text-center text-3xl"> Mediporta - zadanie rekrutacyjne</div>
      <TagTable/>
    </div>
  );
}

export default App;
