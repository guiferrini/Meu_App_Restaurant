import styled from 'styled-components';

import foto from '../../Assets/mesa-papel-ingredientes.jpg';

export const Base = styled.section`
  height: 100vh;
  display: flex;
`;

export const Imagem = styled.div`
  flex: 1;
  background: url(${foto}) no-repeat center;
  background-size: cover;

  img {
   /**Alterar tamanho e colocar 'deitado' */ 
  }
`;

export const Conteudo = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-around;
  background-color: #ffe3e3;
  margin-left: 5px;
`;

export const Form = styled.form`
  width: 250px;

  h1 {
    color: black;
    font-size: 30px;
  }

  input {
    width: 100%;
    height: 10px;
    padding: 15px 4px;
    box-shadow: 1px 1px 1px rgba(0 0 0 0.9);
    margin-top: 7px;
  }

  button {
    background-color:#a03333;
    width: 100%;
    height: 10px;
    padding: 15px;
    color: white;
    box-shadow: 1px 1px 1px rgba(0 0 0 0.9);
    margin-top: 10px;
  }
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  a {
    margin-top: 5px;
    text-decoration: none;
    color: #a03333; 
  }
`;