
import React from 'react';
import './App.css';
import {HeaderUp} from '../user/header/header'
import { Check } from '../user/check/check';
// import { Footer } from '../user/footer/footer';


const { Copyleaks } = require('plagiarism-checker'); 
const copyleaks = new Copyleaks();

// const routes = {
//   admin: '/admin',
//   user: '/user'
// };

const email = 'oscobosco@gmail.com';
const apiKey = 'db2b97b8-3594-4684-a6ce-66b71f736347';

function App () {
  
  
  const checkPlagiarism = (content) => {
    copyleaks.loginAsync(email,apiKey)
    .then(res=> {} , err=> {});
  }

  const saveDocument = () => {
    
  }

  return (
    <div className="App">
      <HeaderUp />
      <Check />
      {/* <Footer /> */}
    </div>
  );
}


export default App;
