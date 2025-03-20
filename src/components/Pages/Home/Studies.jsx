import { useNavigate } from "react-router-dom";
import { Institute } from "../../Ui/Studies/Institute";
import { Footer } from "../../Layouts/Footer/Footer";
import { Technical } from "../../Ui/Studies/Technical";
import { Technologist } from "../../Ui/Studies/Technologist";
import { English } from "../../Ui/Studies/English";

export const Studies = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <button className="BackButton" onClick={() => navigate("/")}>
          ⬅ Volver
        </button>
        <h3 className="tittle">Estudios</h3>
      </div>

      <div className="cards-container">
        <Institute/>
        <Technical/>
        <Technologist/>
        <English/>
      </div>
      <Footer/>
    </>
  );
};