import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './components/GifApp'; // Ahora solo importas App
import './styles/styles.css'; // Mantén los estilos

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />); // Renderizas App en lugar de GifExpertApp directamente
