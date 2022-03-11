import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import App from './components/App/App';
import Admin from './components/admin/admin';

const rootApp = document.getElementById('root');

// render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   rootApp
// );


render(
  <BrowserRouter>
    <Routes>
        <Route path='/' element = {<App />} />
        <Route path='/admin' element = {<Admin />} />
    </Routes>
  </BrowserRouter> ,
  rootApp
);