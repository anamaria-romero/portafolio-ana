import { useState } from "react";

export const Technologist = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={`card ${flipped ? "flipped" : ""}`} onClick={() => setFlipped(!flipped)}>
      <div className="card-inner">
        <div className="card-front">
          <h2>TECNOLOGO</h2>
        </div>

        <div className="card-back">
          <nav>
            <ul>
              <li>Analisis y Desarrollo de Software</li>
              <li>SENA</li>
              <li>2024 - 2025</li>
              <li>En proceso</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};