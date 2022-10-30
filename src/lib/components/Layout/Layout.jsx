import { useState } from "react";
import { Button } from "../";
import { Outlet, useNavigate } from "react-router-dom";
import { ReactComponent as Controller } from "../../../images/controller.svg";
import { slide as Menu } from "react-burger-menu";
import { Fade as Hamburger } from "hamburger-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./Layout.scss";

const Layout = (props) => {
  const { paths } = props;
  const navigate = useNavigate();
  const [activeMenuLink, setActiveMenuLink] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const links = paths.map((path, index) => {
    const handleClick = () => {
      navigate(path.route);
      setActiveMenuLink(index);
      toggleMenu();
    };

    return (
      <Button
        handleClick={handleClick}
        variant="nav"
        size="big"
        className={activeMenuLink === index ? "active" : ""}
        key={index}
      >
        {path.name}
      </Button>
    );
  });

  const sendHome = () => {
    navigate("/");
  };

  return (
    <>
      <header>
        <Controller className="logo" onClick={sendHome} />
        <Menu
          noOverlay
          right
          isOpen={isMenuOpen}
          onOpen={toggleMenu}
          onClose={toggleMenu}
          customBurgerIcon={
            <Hamburger
              direction="right"
              toggled={isMenuOpen}
              label={isMenuOpen ? "Close menu" : "Show menu"}
            />
          }
          customCrossIcon={false}
        >
          {links}
        </Menu>
      </header>

      <main className="content">
        <Outlet />
      </main>

      <footer>
        <a href="https://github.com/cspemb/cs260CP3">
          <FontAwesomeIcon icon={faGithub} size="2xl" />
        </a>
      </footer>
    </>
  );
};

export default Layout;
