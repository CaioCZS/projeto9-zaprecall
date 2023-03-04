import styled from "styled-components";
import Baixo from "./Baixo";
import Cards from "./Cards";
import Topo from "./Topo";


export default function App() {
  return (
   <Tela>
      <Topo />
      <Cards />
      <Baixo />
   </Tela>
  );
}

const Tela = styled.div`
  background-color:rgb(128,128,128) ;
  height:100vh;
  width:30vw;
  margin:0 auto;
`


