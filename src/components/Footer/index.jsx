import React, { Fragment, useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import LogoImg from "../../assets/LogoImg.png";
import { Container, Copy, ServicesContainer, Item, LogoAndPages } from "./styles";
import { Link } from "react-router-dom";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Fragment>
      <Container>
        <div>
          <Item>
            <LogoAndPages>
              {/* Inclua aqui o componente do logo */}
              <img src={LogoImg} alt="" />

              {/* Inclua aqui as páginas "Nosso Serviços" e "Institucional" */}
            </LogoAndPages>

            <nav>
              <li>
                <span>
                  <FaFacebook size={32} />
                </span>
              </li>
              <li>
                <span>
                  <FaInstagram size={32} />
                </span>
              </li>
              <li>
                <span>
                  <FaWhatsapp size={32} />
                </span>
              </li>
            </nav>
          </Item>
        </div>
        <div>
          <ServicesContainer>
            <Item>
              <h3>Nossos Serviços</h3>
              <ul>
                <li>
                  <span onClick={handleLinkClick}><Link to="/comprar">Comprar</Link></span>
                </li>
                <li>
                  <span onClick={handleLinkClick}><Link to="/alugar">Alugar</Link></span>
                </li>
                <li>
                  <span onClick={handleLinkClick}><Link to="/vender">Vender</Link></span>
                </li>
              </ul>
            </Item>
            <Item>
              <h3>Institucional</h3>
              <ul>
                <li>
                  <span onClick={handleLinkClick}><Link to="/termouso">Termo de Uso</Link></span>
                </li>
                <li>
                  <span onClick={handleLinkClick}><Link to="/politicaprivacidade">Politica de Privacidade</Link></span>
                </li>
                <li>
                  <span onClick={handleLinkClick}><Link to="/politicacookie">Politica de Cookie</Link></span>
                </li>
              </ul>
            </Item>
          </ServicesContainer>
        </div>
      </Container>
      <Copy showScroll={showScroll}>
        <p>© Copyright 2023 - Workside Tecnologia All Rights Reserved.</p>
        <ul></ul>
      </Copy>
    </Fragment>
  );
};

export default Footer;
