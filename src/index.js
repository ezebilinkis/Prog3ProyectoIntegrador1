//Importamos los componentes que vamos a utilizar
import React from 'react';
import ReactDOM from 'react-dom/client'; //Librería que permite renderizar componentes
import App from './App';
import { BrowserRouter } from 'react-router-dom'; //Enrutador general


//Buscamos el elemento con ID 'root' en index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
//Renderizamos la aplicación en ese archivo
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);