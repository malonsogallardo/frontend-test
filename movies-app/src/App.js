import React from 'react';
import './App.css';
import { InputAddMovies } from './components/InputAddMovies';
import { InputAddGenres } from './components/InputAddGenre';

export const App = () => {
  return (
    <div className="App">
      <div>
        <p> hola</p>
        </div>
        <InputAddMovies/>
        <InputAddGenres/>
    </div>
    
    
  );
}


