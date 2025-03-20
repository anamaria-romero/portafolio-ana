import { useState } from "react";

export const English = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={`card ${flipped ? "flipped" : ""}`} onClick={() => setFlipped(!flipped)}>
      <div className="card-inner">
        <div className="card-front">
          <h2>INGLES</h2>
        </div>

        <div className="card-back">
          <nav>
            <ul>
              <li>Curso de Ingles</li>
              <li>American School Way</li>
              <li>Nivel B1</li>
              <li>En proceso</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};