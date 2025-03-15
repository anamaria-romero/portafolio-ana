import { useState } from "react";

export const Versions = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={`card ${flipped ? "flipped" : ""}`} onClick={() => setFlipped(!flipped)}>
      <div className="card-inner">
        <div className="card-front">
          <h2>Control de versiones</h2>
        </div>

        <div className="card-back">
          <nav>
            <ul>
              <li>Git</li>
              <li>GitHub</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
