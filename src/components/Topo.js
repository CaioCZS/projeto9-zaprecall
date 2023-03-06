import styled from "styled-components"
import logo from "../assets/images/logo.png"
export default function Topo(){
    return(
        <DivTopo>
            <img src={logo} alt="imagem logo"/>
            <p>ZapRecall</p>
        </DivTopo>
    )
}

const DivTopo = styled.div`
    height: 25vh;
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    img{
        width:4em;
    }
    p{
        font-size:40px;
        font-family:Righteous;
        color:#FFFFFF;//rgb(224, 224, 224);;
        margin-left:20px;
    }
`