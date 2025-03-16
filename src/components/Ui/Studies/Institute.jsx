import { useState } from "react";

export const Institute = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={`card ${flipped ? "flipped" : ""}`} onClick={() => setFlipped(!flipped)}>
      <div className="card-inner">
        <div className="card-front">
          <h2>Bachiller</h2>
        </div>

        <div className="card-back">
          <nav>
            <ul>
              <li>Bachiller</li>
              <li>Institucion Educativa Instituo Pijao</li>
              <li>2012 - 2023</li>
              <a href="/pdf/Bachiller.pdf" target="_blank" rel="noopener noreferrer">Ver Bachiller</a>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
