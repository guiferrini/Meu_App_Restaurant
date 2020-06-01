import React from 'react';
import { Link } from 'react-router-dom';

import { Base, Imagem, Conteudo, Form, Links } from './styles';

import logo from '../../Assets/logo.png';

const Principal: React.FC = () => (
  <Base>
    <Imagem>
      <img src={logo} alt="logo" />
    </Imagem>

    <Conteudo>
      <Form>
        <h1>Bem Vindo</h1>
        <input type="text" placeholder="Email"/>
        <input type="text" placeholder="Senha"/>

        <button type="submit">Entrar</button>
      </Form>
      <Links>
        <Link to="esqueci">
          Esqueci Minha Senha
        </Link>
        <Link to="novo">
          Fazer Cadastro - Novo Usuário
        </Link>
      </Links>
    </Conteudo>
  </Base>
);

export default Principal;