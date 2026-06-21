import { Link } from "react-router-dom";
import Iridescence from "./Iridescence";

export default function LandingPage() {
  return (
    <div style={{
      position: "relative",
      width: "100vw",
      height: "100vh",
      overflow: "hidden",
      background: "black"
    }}>

      {/* BACKGROUND FORZADO */}
      <div style={{
        position: "absolute",
        inset: 0,
        zIndex: 0
      }}>
        <Iridescence
          color={[0.5, 0.6, 0.8]}
          mouseReact
          amplitude={0.1}
          speed={1}
        />
      </div>

      {/* OVERLAY */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "rgba(0,0,0,0.5)",
        zIndex: 1
      }} />

      {/* TEXTO */}
      <div style={{
        position: "relative",
        zIndex: 2,
        color: "white",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: "2rem" }}> 
          Test Sensorial
          <p>Una bola y media de mamadas para una clase pitera</p>
        </h1>

        <p>Explora los sentidos</p>

        <Link
          to="/test"
          style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "10px 20px",
            background: "purple",
            color: "white",
            borderRadius: "8px"
          }}
        >
          Haz el test maldita perra 
        </Link>
      </div>

    </div>
  );
}2