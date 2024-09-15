import React from 'react';
import './App.css';

const Painel = () => { 
  return (
    <div className="painel">
      15 / 2 = 7,5
    </div>
  )
}

const Botao = (props) => {
  return (
    <div className={props.tipo}>
      {props.digito}
    </div>
  )
}

function App() {
  return(
    <div className="painel-botoes">
      <Painel/>
      <Botao tipo="botao-ac" digito="AC" />
      <Botao tipo="botao-operacao" digito="/" />
      <Botao tipo="botao-numero" digito="7" />
      <Botao tipo="botao-numero" digito="8" />
      <Botao tipo="botao-numero" digito="9" />
      <Botao tipo="botao-operacao" digito="*" />
      <Botao tipo="botao-numero" digito="4" />
      <Botao tipo="botao-numero" digito="5" />
      <Botao tipo="botao-numero" digito="6" />
      <Botao tipo="botao-operacao" digito="-" />
      <Botao tipo="botao-numero" digito="1" />
      <Botao tipo="botao-numero" digito="2" />
      <Botao tipo="botao-numero" digito="3" />
      <Botao tipo="botao-operacao" digito="+" />
    </div>
  );
}

export default App;
