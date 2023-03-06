import styled from "styled-components";
import logo from "../assets/images/logo.png";
export default function TelaInicial({esconder,abrirJogo}) {
    return (
    <DivTelaInicial esconder={esconder}>
      <img src={logo} alt="logo-inicio"/>
      <p>ZapRecall</p>
      <button  data-test="start-btn" onClick={abrirJogo}>Iniciar Recall!!</button>
    </DivTelaInicial>
  );
}

const DivTelaInicial = styled.div`
  height: 100vh;
  width: 414px;
  background-color: rgb(96, 96, 96);
  z-index: 2;
  display: ${({esconder}) => esconder };
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    color:white;
    font-family:Righteous;
    font-size:36px;
    margin-top:30px;
  }

  button{
    height:54px;
    width:70%;
    margin-top: 30px;
    color:rgb(255,255,255);
    font-size:18px;
    font-family:Recursive;
    border:thin solid rgb(16,16,16);//rgb(128,128,128);
    border-radius:5px;
    background-color:rgb(16,16,16);
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.25);
  }
`;
