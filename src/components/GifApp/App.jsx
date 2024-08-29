import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GifExpertApp, NavBar } from '../GifApp'; // Ajusta las rutas según tu estructura de archivos

export function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<GifExpertApp />} />
        <Route path="/favoritos" element={<GifExpertApp favoritesOnly={true} />} />
      </Routes>
    </BrowserRouter>
  );
}

