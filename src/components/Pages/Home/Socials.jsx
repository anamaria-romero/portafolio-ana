import { useNavigate } from "react-router-dom";
import { Footer } from "../../Layouts/Footer/Footer";

export const Socials = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <button className="BackButton" onClick={() => navigate("/")}>
          ⬅ Volver
        </button>
        <h1 className="tittle">Habilidades Sociales</h1>
      </div>

        <Footer/>
    </>
  );
};
