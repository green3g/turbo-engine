import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import Clock from './components/Clock/Clock'
import Game from './components/Game/Game';

  
  // ========================================
  
  ReactDOM.render(
    <div><Game /><Clock /></div>,
    document.getElementById('root')
  );
  
  
  