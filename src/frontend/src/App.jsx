import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import LoginSuccess from "./pages/LoginSuccess";
import Register from "./pages/Register";  // Asegúrate de importar el componente Register

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login-success" element={<LoginSuccess />} /> {/* Corregí el error tipográfico aquí */}
        <Route path="/register" element={<Register />} /> {/* Agregué la ruta para registrarse */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

