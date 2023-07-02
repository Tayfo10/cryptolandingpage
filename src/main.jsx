import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <div className="part2">
      <Canvas
      
        shadows
        camera={{
          fov: 20,
          near:0.1,
          far: 200,
          position: [10.6, 1.5, -0.7],
        }}
      >
        <Experience />
      </Canvas>
    </div>
  </React.StrictMode>
);
