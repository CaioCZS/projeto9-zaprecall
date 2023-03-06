import styled from "styled-components";
import Baixo from "./Baixo";
import Cards from "./Cards";
import Topo from "./Topo";
import cards from "../cards.js"
import { useState } from "react";

export default function App() {
  const quantidadeCartas = cards.length
  const [finalizadas , setFinalizadas] = useState([])
  function adicionarFinalizadas(card){
    finalizadas.push(card)
    const nvArr = [...finalizadas]
    setFinalizadas(nvArr)
    console.log(nvArr)
  }
  return (
   <Tela>
      <Scroll>
      <Topo />
      <Cards cards={cards} adicionarFinalizadas={adicionarFinalizadas}/>
      </Scroll>
      <Baixo finalizadas={finalizadas} quantidadeCartas={quantidadeCartas}/>
   </Tela>
  );
}

const Tela = styled.div`
  height:100vh;
  width:414px;
`
const Scroll = styled.div`
  background-color:#FB6B6B;//rgb(128,128,128)
  height:90vh;
  overflow-y: auto;
`


