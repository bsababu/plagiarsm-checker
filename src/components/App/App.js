import './App.css';
import React from 'react';
import {HeaderUp} from '../user/header/header'
import { Check } from '../user/check/check';
import { Footer } from '../user/footer/footer';

function App() {
  return (
    <div className="App">
      <HeaderUp />
      <Check />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
