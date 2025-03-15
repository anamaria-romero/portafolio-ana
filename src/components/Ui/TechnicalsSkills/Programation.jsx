import { useState } from "react";

export const Programation = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={`card ${flipped ? "flipped" : ""}`} onClick={() => setFlipped(!flipped)}>
      <div className="card-inner">
        <div className="card-front">
          <h2>Lenguajes de Programacion</h2>
        </div>

        <div className="card-back">
          <nav>
            <ul>
              <li>Java</li>
              <li>TypeScript</li>
              <li>JavaScript</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
