import "./Foot.css";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";

const customTwitterIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
  </svg>
);

export default function Footer() {
  return (
    <footer>
      <div className="social-icons">
        <a
          href="https://github.com/erikamerico"
          target="_blank"
          rel="noopener noreferrer"
          id="gitHubIcon"
        >
          <IconContext.Provider value={{ className: "icon github-icon" }}>
            <FaGithub />
          </IconContext.Provider>
        </a>
        <a
          href="https://www.linkedin.com/in/erik-olson-977513262/"
          target="_blank"
          rel="noopener noreferrer"
          id="linkedInIcon"
        >
          <IconContext.Provider value={{ className: "icon" }}>
            <FaLinkedin />
          </IconContext.Provider>
        </a>
        <a
          href="https://twitter.com/KireNoslo"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
          id="twitterIcon"
        >
          <IconContext.Provider value={{}}>
            {customTwitterIcon}
          </IconContext.Provider>
        </a>
        <a
          href="https://www.instagram.com/erik_says_/"
          target="_blank"
          rel="noopener noreferrer"
          id="instagramIcon"
        >
          <IconContext.Provider value={{ className: "icon instagram-icon" }}>
            <FaInstagram />
          </IconContext.Provider>
        </a>
      </div>
    </footer>
  );
}
