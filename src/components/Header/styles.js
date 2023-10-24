import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #fff;
  color: black;
`;

export const Logo = styled.div`
  img {
    width: 130px;
    height: auto;
    margin-left: 110px; /* Adicione a margem esquerda desejada aqui */
    margin-right: 20px; /* Mantenha a margem direita, se necessário */
  }
`;

export const Menu = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    li {
      margin-right: 20px;
      &:last-child {
        margin-right: 0;
      }
      a {
        background-color: #0074e4;
        color: #fff;
        font-weight: bold;
        padding: 8px 10px;
        border-radius: 5px;
        text-decoration: none;
        transition: background-color 0.3s ease;
        &:hover {
          background-color: #0057b3;
        }
      }
    }
  }

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    display: ${(props) => (props.isMobileMenuOpen ? "flex" : "none")};
    flex-direction: column;
    z-index: 999;
    text-align: left;
    color: black;
    padding-top: 60px;
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      li {
        margin-right: 0;
        padding: 10px 0;
        a {
          background-color: #0074e4;
          color: #fff;
          font-weight: bold;
          padding: 10px 20px;
          border-radius: 5px;
          text-decoration: none;
          transition: background-color 0.3s ease;
          &:hover {
            background-color: #0057b3;
          }
        }
      }
    }
  }

  @media (min-width: 769px) {
    ul {
      display: flex;
      align-items: center;
      flex-direction: row;
      margin-right: 50px;
    }
  }
`;

export const MobileMenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #0074e4;
  font-size: 18px;
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

export const CloseMenuButton = styled.button`
  display: none;
`;

export const MobileMenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
`;

export const MobileMenuItem = styled.li`
  padding: 10px 20px;
  margin-bottom: 10px;
  margin-left: 12px;
  color: black;
  cursor: pointer;
  button {
    background-color: #0074e4;
    border: none;
    color: #fff;
    font-weight: bold;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    transition: background-color 0.3s ease;
    &:hover {
      background-color: #0057b3;
    }
  }
`;

export const MobileMenu = styled.nav`
  display: ${(props) => (props.isMobileMenuOpen ? "block" : "none")};
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    z-index: 999;
    text-align: left;
    color: black;
    padding-top: 60px;
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      li {
        margin-right: 0;
        padding: 10px 0;
      }
    }
    button {
      background: none;
      border: none;
      cursor: pointer;
      color: #0074e4;
      font-size: 18px;
      position: absolute;
      top: 20px;
      right: 20px;
      display: block;
      @media (min-width: 769px) {
        display: none;
      }
    }
  }
`;
