import { useNavigate } from "react-router-dom";
import { Footer } from "../../Layouts/Footer/Footer";
import { Dictionary } from "../../Ui/Experiences/Dictionary";
import { MP3 } from "../../Ui/Experiences/MP3";
import { Portafolio } from "../../Ui/Experiences/Portafolio";
import { ProjectAtlas } from "../../Ui/Experiences/ProjectAtlas";
import { Teddys } from "../../Ui/Experiences/Teddys";

export const Experiences = () => {
    const navigate = useNavigate();

    return (
        <>
            <div>
                <button className="BackButton" onClick={() => navigate("/")}>
                    ⬅ Volver
                </button>
                <h3 className="tittle">Experiencias Profesionales</h3>
            </div>

            <div className="projects-container">
                <div className="Work-container"><Dictionary /></div>
                <div className="Work-container"><MP3 /></div>
                <div className="Work-container"><Portafolio /></div>
                <div className="Work-container"><ProjectAtlas /></div>
                <div className="Work-container"><Teddys /></div>
            </div>


            <Footer />
        </>
    );
};

