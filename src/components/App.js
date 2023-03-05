import styled from "styled-components";
import Baixo from "./Baixo";
import Cards from "./Cards";
import Topo from "./Topo";
import cards from "../cards.js"

export default function App() {
  const quantidadeCartas = cards.length
  return (
   <Tela>
      <Teste>
      <Topo />
      <Cards cards={cards}/>
      </Teste>
      <Baixo quantidadeCartas={quantidadeCartas}/>
   </Tela>
  );
}

const Tela = styled.div`
  background-color:rgb(128,128,128) ;
  height:100vh;
  width:414px;
`
const Teste = styled.div`
  height:90vh;
  overflow-y: auto;
`


