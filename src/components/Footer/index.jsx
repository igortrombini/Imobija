import React, { Fragment } from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import LogoImg from "../../assets/LogoImg.png";
import { Container, Copy, ServicesContainer, Item, LogoAndPages } from "./styles";
import { Link } from "react-router-dom";


const Footer = () => {
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
                  <span><Link to="/comprar">Comprar</Link></span>
                </li>
                <li>
                  <span><Link to="/alugar">Alugar</Link></span>
                </li>
                <li>
                  <span><Link to="/vender">Vender</Link></span>
                </li>
              </ul>
            </Item>
            <Item>
              <h3>Institucional</h3>
              <ul>
                <li>
                  <span><Link to="/termouso">Termo de Uso</Link></span>
                </li>
                <li>
                  <span><Link to="/politicaprivacidade">Politica de Privacidade</Link></span>
                </li>
                <li>
                  <span>Política de Cookies</span>
                </li>
              </ul>
            </Item>
          </ServicesContainer>
        </div>
      </Container>
      <Copy>
        <p>© Copyright 2022 - Workside Tecnologia All Rights Reserved.</p>
        <ul></ul>
      </Copy>
    </Fragment>
  );
};

export default Footer;
