import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import App from "./App";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/test" element={<App />} />
    </Routes>
  );
}