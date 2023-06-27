import React, { useState } from 'react';
import { Escena, Botones } from './components/escena/Escena';
import historia from './historia';

const App = () => {
  const [fraseSeleccionada, setFraseSeleccionada] = useState(-1);
  const [mostrarPantallaInicial, setMostrarPantallaInicial] = useState(true);

  const handleAnteriorClick = () => {
    if (fraseSeleccionada > 0) {
      setFraseSeleccionada(fraseSeleccionada - 1);
    }
  };

  const handleSiguienteClick = () => {
    if (fraseSeleccionada === -1) {
      setFraseSeleccionada(0);
      setMostrarPantallaInicial(false);
    } else if (fraseSeleccionada < historia.length - 1) {
      setFraseSeleccionada(fraseSeleccionada + 1);
    }
  };

  if (mostrarPantallaInicial) {
    return (
      <div>
        <h1>Benvingut a la nostra App!</h1>
        <p>Aquest és el primer projecte creat amb React</p>
        <button onClick={() => setMostrarPantallaInicial(false)}>Començar</button>
      </div>
    );
  }

  return (
    <div>
      <Botones
        textoAnterior="Anterior"
        textoSiguiente="Següent"
        onAnteriorClick={handleAnteriorClick}
        onSiguienteClick={handleSiguienteClick}
      />
      {historia.map((frase, index) => (
        <Escena
          key={index}
          text={frase}
          seleccionada={index === fraseSeleccionada}
        />
      ))}
    </div>
  );
};

export default App;
