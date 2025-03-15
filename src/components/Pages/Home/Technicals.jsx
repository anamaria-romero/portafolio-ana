import { useNavigate } from "react-router-dom";

export const Technicals = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button className="BackButton" onClick={() => navigate("/")}>⬅ Volver</button>
      <h1>Habilidades Técnicas</h1>
    </div>
  );
};