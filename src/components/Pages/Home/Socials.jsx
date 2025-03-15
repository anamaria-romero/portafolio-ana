import { useNavigate } from "react-router-dom";

export const Socials  = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button className="BackButton" onClick={() => navigate("/")}>⬅ Volver</button>
      <h1>Habilidades Sociales</h1>
      <p>Aquí puedes agregar una descripción más detallada de las habilidades sociales.</p>
    </div>
  );
};