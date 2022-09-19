import styled from "styled-components";
import MapaDoMaroto from "../img/mapadomaroto3.jpg"

export const Container = styled.section`
    width: 100%;
    background-image: url(${MapaDoMaroto});
    background-size: contain;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
`
export const Title = styled.h1`
    width: 70%;
    text-align: center;
    color: black;
    text-shadow: 5px 5px 10px #eeba30;
    
    font-size: 5rem;
    padding-top: 1rem;
    transition: 1s all;

    &:hover{
        transform: scale(1.1);
        
        color: #eeba30;
        text-shadow: 5px 5px 10px black;
    }

    @media only screen and (min-width: 360px) and (max-width: 800px){
        font-size: 2.3rem;
    }

    @media only screen and (min-width: 412px) and (max-width: 780px){
        font-size: 2.3rem;
    }
`

export const Personagem = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    list-style: none;
    width: 95%;
`

export const Card = styled.div`
    width: 250px;
    height: 360px;
    background-color: black;
    box-shadow: 5px 5px 10px #eeba30;
    margin: 2rem;
    border-radius: 20px;
    /* border: solid; */
    position: relative; //pra ficar onde ele está
    overflow: hidden; //ele esconde o que tá fora da card
    transition: ease-in-out .1s all;

    &:hover .About{
        top: 0;
    }

    div{
        position: absolute;
    }
`

export const Foto = styled.img`
    border: solid;
    width: 250px;
    height: 300px;
    object-fit: cover;
    border-radius: 20px;
`

export const WhoIAm = styled.p`
    text-align: center;
    font-size: 2rem;
    color: #eeba30;  
    width: 250px;
    cursor: pointer;
    transition: 1s all;

    &:hover{
    transform: scale(1.2);
    left: 0;
    }
`

export const About = styled.div`
    background: black;
    border-radius: 20px;
    width: 250px;
    height: 300px;
    text-align: center;
    font-size: 1.5rem;
    
    opacity: 0.6;
    position: absolute;
    top: -320px;
    
    p{
    color: white;
    font-size: 1.5rem;
    padding: 5px;
    }
`

export const Rodape = styled.h3`
    text-align: center;
    text-shadow: 5px 5px 10px #eeba30;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
`

export const Varinha = styled.img`
    width: 3rem;
`
