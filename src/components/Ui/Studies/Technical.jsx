import { useState } from "react";

export const Technical = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={`card ${flipped ? "flipped" : ""}`} onClick={() => setFlipped(!flipped)}>
      <div className="card-inner">
        <div className="card-front">
          <h2>Tecnico</h2>
        </div>

        <div className="card-back">
          <nav>
            <ul>
              <li>Analisis y Desarrollo de Software</li>
              <li>SENA</li>
              <li>2022 - 2023</li>
              <a href="/pdf/Tecnico.pdf" target="_blank" rel="noopener noreferrer">Ver Técnico</a>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};