import React, { Fragment } from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import LogoImg from "../../assets/LogoImg.png";
import { Container, Copy, ServicesContainer, Item, LogoAndPages } from "./styles";

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
                  <span>Comprar</span>
                </li>
                <li>
                  <span>Alugar</span>
                </li>
                <li>
                  <span>Vender</span>
                </li>
              </ul>
            </Item>
            <Item>
              <h3>Institucional</h3>
              <ul>
                <li>
                  <span>Termos de Uso</span>
                </li>
                <li>
                  <span>Política de Privacidade</span>
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
