import { Link } from "react-router-dom";
import "./landing.css";

export default function LandingPage() {
  return (
    <div className="landing">

      <h1>Los 7 Sentidos del Ser Humano</h1>

      <p>
        Descubre cómo nuestro cerebro interpreta el mundo a través de
        la vista, el oído, el gusto, el olfato, el tacto, el equilibrio
        y la propiocepción.
      </p>

      {/* Aquí pondrás todas las tarjetas */}

      <div className="contenedor-boton">
        <Link to="/test">
          <button className="btn-test">
            Realizar Test Sensorial
          </button>
        </Link>
      </div>

    </div>
  );
}