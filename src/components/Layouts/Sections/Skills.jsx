import { useNavigate } from "react-router-dom";

export const Skills = () => {
  const navigate = useNavigate();

  return (
    <div className="ContainerSkills">
      <button className="Skills" onClick={() => navigate("/Technicals")}>
        Habilidades Técnicas
      </button>
      <button className="Skills" onClick={() => navigate("/Socials")}>
        Habilidades Sociales
      </button>
      <button className="Skills" onClick={() => navigate("/Studies")}>
        Estudios
      </button>
      <button className="Skills" onClick={() => navigate("/Experiences")}>
        Expericencias Profesionales
      </button>
    </div>
  );
};
