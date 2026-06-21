import { Link } from "react-router-dom";
import Dither from "./Dither";

function LandingPage() {
  return (
    <div style={{ width: "100%", height: "100vh", position: "relative" }}>
      <Dither
        waveColor={[0.23, 0.51, 0.96]}
        disableAnimation={false}
        enableMouseInteraction
        mouseRadius={0.3}
        colorNum={4}
        waveAmplitude={0.3}
        waveFrequency={3}
        waveSpeed={0.05}
      />

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1>Bienvenido 🚀</h1>
        <p>Fondo Dither animado</p>

        <Link to="/encuesta" style={{ color: "yellow" }}>
          Ir a encuesta
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;