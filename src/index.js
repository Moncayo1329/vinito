import React from 'react';
import ReactDOM from 'react-dom/client'; // Cambia a 'react-dom/client'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import  About  from './Pages/sobre'
import { Future } from './Pages/Future'
import './index.css';
import reportWebVitals from './reportWebVitals';
import { App } from './App';

function Main() {
  return (
  <BrowserRouter> 
      
      <Routes>
        {/* Rutas principales */}
        <Route path="/" element={<App />} />
        <Route path="/Sobre" element={<About />} /> 
<Route path="/Deseos" element={<Future />} />  
        {/* Puedes agregar más rutas aquí si es necesario */}
      </Routes>
    
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main /> {/* Renderiza Main en lugar de App */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

