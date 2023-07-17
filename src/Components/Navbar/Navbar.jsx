import React from "react";
import { ThemeContext } from "../../Context/theme";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import WbSunnyRoundedIcon from "@material-ui/icons/WbSunnyRounded";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-scroll";
import { useRef } from "react";
import "./Navbar.css";
export const Navbar = () => {
  const ref = useRef();
  const [{ themename, toggeltheme }] = React.useContext(ThemeContext);
  const [showNavList, setShowNavList] = React.useState(false);

  const toggleNavList = () => {
    ref.current.classList.toggle("responsive-nav");
    setShowNavList(!showNavList);
  };

  return (
    <>
      <nav className="center nav">
        <ul
          // style={{
          //   display: showNavList ? "flex" : null,
          //   "@media and (maxWidth: 768px)": {
          //     // opacity: showNavList ? 1 : 0,
          //     transform: showNavList ? "translateY(0)" : "translateY(-100%)",
          //   },
          // }}
          className="nav__list"
          ref={ref}
        >
          <li className="nav__list-item">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={toggleNavList}
              className="link link--nav"
            >
              Home
            </Link>
          </li>
          <li className="nav__list-item">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={400}
              duration={500}
              onClick={toggleNavList}
              className="link link--nav"
            >
              About
            </Link>
          </li>
          <li className="nav__list-item">
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onClick={toggleNavList}
              className="link link--nav"
            >
              Skills
            </Link>
          </li>
          <li className="nav__list-item">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={toggleNavList}
              className="link link--nav"
            >
              Projects
            </Link>
          </li>
          <li className="nav__list-item">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onClick={toggleNavList}
              className="link link--nav"
            >
              Contact
            </Link>
          </li>
        </ul>
        <button
          type="button"
          onClick={toggeltheme}
          className="btn btn--icon nav__theme"
          aria-label="toggle theme"
          style={{ backgroundColor: "inherit" }}
        >
          {themename === "dark" ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
        </button>
        <button
          type="button"
          className="btn btn--icon nav__hamburger"
          aria-label="toggle navigation"
          onClick={toggleNavList}
        >
          {showNavList ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>
    </>
  );
};
