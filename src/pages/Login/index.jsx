import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Container, ContainerForm, Form, Label } from "./styles";
import { AppAuth } from "../../context/AppAuth";
import { Link } from "react-router-dom"; // Importe o Link para criar o link para a página de cadastro

const Login = () => {
  const auth = AppAuth();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = async (e) => {
    e.preventDefault();
    await auth.authenticate(email, password);
  }

  return (
    <Container>
      <h2>Acesse sua conta</h2>
      <p>Entre com seu e-mail e senha!</p>
      <ContainerForm>
        <Form onSubmit={handleLogin} autoComplete="off">
          <Label>E-mail</Label>
          <Input
            type="text"
            name="email"
            placeholder="Informe seu E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Label>Senha</Label>
          <Input
            type="password"
            name="password"
            placeholder="Informe sua senha"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Fazer Login</Button>
        </Form>
        <p>
          Ainda não tem cadastro? <Link to="/cadastro">Faça seu cadastro aqui</Link>!
        </p>
      </ContainerForm>
    </Container>
  )
}

export default Login;
