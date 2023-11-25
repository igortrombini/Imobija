import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SearchCityResults from "../components/SearchCityResults";
import Home from "../pages/Home";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Error from "../pages/Error";
import Imobi from "../pages/Imobi";
import Login from "../pages/Login";
import Comprar from "../pages/Comprar";
import Alugar from "../pages/Alugar";
import Vender from "../pages/Vender";
import PoliticaPrivacidade from "../pages/PoliticaPrivacidade";
import TermoUso from "../pages/TermoUso";
import Cadastro from "../pages/Cadastro";
import Perfil from "../pages/Perfil";
import PrivateRoute from "../components/PrivateRoute";


const RouterApp = () => {
  return (
    <Router>
      <Header />      
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/imovel/:slug" component={Imobi} />
        <Route path="/login" component={Login} />
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/comprar" component={Comprar} />
        <Route path="/alugar" component={Alugar} />
        <Route path="/vender" component={Vender} />
        <Route path="/termouso" component={TermoUso} />
        <Route path="/politicaprivacidade" component={PoliticaPrivacidade} />
        <Route path="/search-results" component={SearchCityResults} /> {/* Renderize o componente SearchCityResults diretamente */}
        <PrivateRoute path="/perfil" component={Perfil} />
        <Route path="*" component={Error} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default RouterApp;
