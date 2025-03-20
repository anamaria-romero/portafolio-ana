import { useState } from "react";

export const Backend = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={`card ${flipped ? "flipped" : ""}`} onClick={() => setFlipped(!flipped)}>
      <div className="card-inner">
        <div className="card-front">
          <h2>BACKEND</h2>
        </div>

        <div className="card-back">
          <nav>
            <ul>
              <li>Java</li>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>Java-Spring Boot</li>
              <li>Repository</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
