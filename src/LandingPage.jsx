import { Link } from "react-router-dom";
import Iridescence from "./Iridescence";

function LandingPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Fondo animado */}
      <Iridescence
        color={[0.5, 0.6, 0.8]}
        mouseReact
        amplitude={0.1}
        speed={1}
      />

      {/* Contenido centrado */}
      <div className="absolute text-center text-white">
        <h1 className="text-4xl font-bold">Bienvenido 🚀</h1>
        <p className="mt-2">Explora los sentidos con un fondo animado</p>
        <Link
          to="/sentidos"
          className="mt-4 inline-block bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded"
        >
          Ir a los sentidos
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
