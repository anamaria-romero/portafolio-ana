import { useNavigate } from "react-router-dom";
import { Frontend } from "../../Ui/TechnicalsSkills/Frontend";
import { Programation } from "../../Ui/TechnicalsSkills/Programation";
import { Backend } from "../../Ui/TechnicalsSkills/Backend";
import { Versions } from "../../Ui/TechnicalsSkills/Versions";
import { Footer } from "../../Layouts/Footer/Footer";

export const Technicals = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <button className="BackButton" onClick={() => navigate("/")}>
          ⬅ Volver
        </button>
        <h3 className="tittle">Habilidades Técnicas</h3>
      </div>

      <div className="cards-container">
        <Frontend />
        <Programation />
        <Backend />
        <Versions />
      </div>
      <Footer/>
    </>
  );
};
