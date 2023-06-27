
import React from 'react';
import styled from 'styled-components';


const StyledEscena = styled.p`
display: flex;
color: black;
justify-content: center;
font-size: 12px;
background-color: ${(props) => (props.seleccionada ? '#FA98B2' : '#ffffff')};
margin-bottom: 10px;
border: 2px solid #000000;
border-radius: 15px;
width: 100vw;
font-family: "Times New Roman", Times, serif;
`;

const Button = styled.button`
  background-color: #C8C6C5;
  color: black;
  font-size: 20px;
  padding: 1em;
  margin: 5px;
  border: 1px solid #000000;
  border-radius: 15px;
  cursor: pointer;
  width:95%;
  `;
// const ButtonGroup = styled.div`
//   display: flex;`
const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;


export const Escena = ({ text, seleccionada }) => {
  return <StyledEscena seleccionada={seleccionada}>{text}</StyledEscena>;
};


export const BotonAnterior = ({ text, onClick }) => {
  return <Button onClick={onClick}>{text}</Button>;
};

export const BotonSiguiente = ({ text, onClick }) => {
  return <Button onClick={onClick}>{text}</Button>;
};

export const Botones = ({ textoAnterior, textoSiguiente, onAnteriorClick, onSiguienteClick }) => {
  return (
    <ButtonGroup>
      <BotonAnterior text={textoAnterior} onClick={onAnteriorClick} />
      <BotonSiguiente text={textoSiguiente} onClick={onSiguienteClick} />
    </ButtonGroup>
  );
};



