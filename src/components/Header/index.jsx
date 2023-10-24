import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  Container,
  Logo,
  Menu,
  MobileMenuButton,
  MobileMenu,
  MobileMenuList,
  MobileMenuItem,
  CloseMenuButton,
} from "./styles";
import LogoImg from "../../assets/LogoImg.png";
import SearchBar from "../SearchBar"; // Importe o componente de barra de pesquisa

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [userLogged, setUserLogged] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleLogout = () => {
    // Lógica para fazer logout, por exemplo, remover o token do localStorage
    localStorage.removeItem("Yt");
    setUserLogged(false);
  };

  useEffect(() => {
    // Verifique se o usuário está logado (por exemplo, através de uma chamada à API ou usando localStorage)
    const userIsLogged = localStorage.getItem("Yt");
    setUserLogged(userIsLogged);
  }, []);

  return (
    <Container>
      <Logo>
        <Link to="/">
          <img src={LogoImg} alt="Logo" width="80px" height="auto" />
        </Link>
      </Logo>
      {window.innerWidth > 768 && ( // Renderize a barra de pesquisa apenas em dispositivos de desktop
        <SearchBar />
      )}
      <Menu>
        <ul>
          {!userLogged ? (
            <>
              <li>
                <Link to="/login">
                  <span>Entrar</span>
                </Link>
              </li>
              <li>
                <Link to="/cadastro">
                  <span>Anunciar</span>
                </Link>
              </li>
              {window.innerWidth <= 768 && (
                <li>
                  <SearchBar />
                </li>
              )}
            </>
          ) : (
            <>
              <li>
                <Link to="/login">
                  <span>Entrar</span>
                </Link>
              </li>
              <li>
                <Link onClick={handleLogout}>
                  <span>Sair</span>
                </Link>
              </li>
              {window.innerWidth <= 768 && (
                <li>
                  <SearchBar />
                </li>
              )}
            </>
          )}
        </ul>
      </Menu>
      <MobileMenuButton onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </MobileMenuButton>
      <MobileMenu isMobileMenuOpen={isMobileMenuOpen}>
        <CloseMenuButton onClick={closeMobileMenu}>X</CloseMenuButton>
        <MobileMenuList>
          {!userLogged ? (
            <>
              <MobileMenuItem onClick={closeMobileMenu}>
                <Link to="/cadastro">Anunciar</Link>
              </MobileMenuItem>
              <MobileMenuItem onClick={closeMobileMenu}>
                <Link to="/login">Entrar</Link>
              </MobileMenuItem>
            </>
          ) : (
            <MobileMenuItem onClick={() => { closeMobileMenu(); handleLogout(); }}>
              Sair
            </MobileMenuItem>
          )}
        </MobileMenuList>
      </MobileMenu>
    </Container>
  );
};

export default Header;
