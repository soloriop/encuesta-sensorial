import { Link } from "react-router-dom";
import Iridescence from "./Iridescence";
import ShinyText from './ShinyText';

export default function LandingPage() {
  return (
    
    <div style={{
      position: "relative",
      width: "100vw",
      height: "100vh",
      overflow: "hidden"
    }}>
<div 
 style={{
  lineHeight: 1.2,
    position: "relative",
    zIndex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: "48px",
    padding: "60px"
  }}>
      <ShinyText
  text=" PERCEPCIÓN VISUAL PARA ESTUDIANTES NEURODIVERGENTES "
  speed={3}
  delay={0}
  color="#c0ccce"
  shineColor="#EC4899"
  spread={120}
  direction="left"
  yoyo
  pauseOnHover={false}
  disabled={false}
/>
</div>


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
        zIndex: 1
      }} />

        <p>Desarrollo de módulos de visión para el monitoreo sensorial en estudiantes neurodivergentes</p>
        <Link
          to="/test"
          style={{
            position: "relative",
            display: "inline-block",
            marginTop: "20px",
            padding: "10px 20px",
            background: "purple",
            color: "white",
            zIndex: 1,
            textDecoration: "none",
            borderRadius: "5px",
            fontSize: "18px"
          }}
        >
         Realizar Test
        </Link>
      </div>
  );
}