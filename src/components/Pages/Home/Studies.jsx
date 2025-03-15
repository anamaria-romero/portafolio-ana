import { useNavigate } from "react-router-dom";

export const Studies  = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button className="BackButton" onClick={() => navigate("/")}>⬅ Volver</button>
      <h1>Estudios</h1>
      <p>Aquí puedes agregar información detallada sobre los estudios realizados.</p>
    </div>
  );
};