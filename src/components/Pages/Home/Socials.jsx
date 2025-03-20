import { useNavigate } from "react-router-dom";
import { Footer } from "../../Layouts/Footer/Footer";
import { SocialsSkills } from "../../Ui/SocialsSkills/SocialsSkills";

export const Socials = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <button className="BackButton" onClick={() => navigate("/")}>
          ⬅ Volver
        </button>
        <h3 className="tittle">Habilidades Sociales</h3>
      </div>
      <SocialsSkills/>
      <Footer/>
    </>
  );
};
