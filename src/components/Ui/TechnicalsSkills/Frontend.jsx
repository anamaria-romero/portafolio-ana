import { useState } from "react";

export const Frontend = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={`card ${flipped ? "flipped" : ""}`} onClick={() => setFlipped(!flipped)}>
      <div className="card-inner">
        <div className="card-front">
          <h2>Frontend</h2>
        </div>

        <div className="card-back">
          <nav>
            <ul>
              <li>React</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Tailwind CSS</li>
              <li>JavaScript</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
