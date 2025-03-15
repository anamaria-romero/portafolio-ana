import { Facebook } from "../../Ui/ImgFooter/facebook"
import { Github } from "../../Ui/ImgFooter/github"
import { Gmail } from "../../Ui/ImgFooter/Gmail"
import { Instagram } from "../../Ui/ImgFooter/Instagram"
import { Linkedin } from "../../Ui/ImgFooter/Linkedin"
import { Telefono } from "../../Ui/ImgFooter/Telefono"

export const Footer = () => {
  return (
    <footer>
      <nav>
        <ul>
          <li><a href="https://www.facebook.com/share/18yZ7CKnEL/?mibextid=wwXIfr"><Facebook/></a></li>
          <li><a href="https://github.com/anamaria-romero"><Github/></a></li>
          </ul>
          <ul>
          <li><a href="mailto:anamrome16@gmail.com"><Gmail/></a></li>
          <li><a href="https://www.instagram.com/ana.romero.16"><Instagram/></a></li>
          </ul>
          <ul>
          <li><a href="https://www.linkedin.com/in/ana-romero-016aa8305/"><Linkedin/></a></li>
          <li><a href="tel:3104252985"><Telefono/></a></li>
          </ul>
      </nav>
    </footer>
  ) 
}