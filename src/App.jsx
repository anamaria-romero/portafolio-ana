import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home/Home";
import { Description } from "./components/Ui/Description/Description";
import { Skills } from "./components/Layouts/Sections/Skills";
import { Footer } from "./components/Layouts/Footer/Footer";
import { Technicals } from "./components/Pages/Home/Technicals";
import { Socials } from "./components/Pages/Home/Socials";
import { Studies } from "./components/Pages/Home/Studies";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Description />
              <Skills />
              <Footer />
            </>
          }
        />
        <Route path="/Technicals" element={<Technicals />} />
        <Route path="/Socials" element={<Socials />} />
        <Route path="/Studies" element={<Studies />} />
      </Routes>
    </Router>
  );
};
