import styled from "styled-components";
import Baixo from "./Baixo";
import Cards from "./Cards";
import Topo from "./Topo";
import cards from "../cards.js";
import { useState } from "react";
import TelaInicial from "./TelaInicial";

export default function App() {
  const quantidadeCartas = cards.length;
  const [finalizadas, setFinalizadas] = useState([]);
  const [esconder, setEsconder] = useState("flex");
  const [todosRespondidos, setTodosRespondidos] = useState(false);
  function adicionarFinalizadas(card) {
    finalizadas.push(card);
    const nvArr = [...finalizadas];
    setFinalizadas(nvArr);
    if(nvArr.length === quantidadeCartas){
      setTodosRespondidos(true)
    }
  }
  function abrirJogo() {
    setEsconder("none");
  }
  return (
    <>
      <TelaInicial abrirJogo={abrirJogo} esconder={esconder} />
      <Tela esconder={esconder}>
        <Scroll todosRespondidos={todosRespondidos}>
          <Topo />
          <Cards
          quantidadeCartas={quantidadeCartas}
            setTodosRespondidos={setTodosRespondidos}
            cards={cards}
            adicionarFinalizadas={adicionarFinalizadas}
          />
        </Scroll>
        <Baixo
          todosRespondidos={todosRespondidos}
          finalizadas={finalizadas}
          quantidadeCartas={quantidadeCartas}
        />
      </Tela>
    </>
  );
}

const Tela = styled.div`
  height: 100vh;
  width: 414px;
  display: ${({ esconder }) => (esconder === "flex" ? "none" : "block")};
`;
const Scroll = styled.div`
  background-color: rgb(128,128,128);
  height: ${({todosRespondidos}) => todosRespondidos ? "75vh" : "90vh"};
  overflow-y: auto;
`;
