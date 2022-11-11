import React, { useState } from "react";
import "./App.css";
import Pokemon from "./Pokemon";
import Blastoise from "./images/blastoise.png";
import Charizard from "./images/charizard.png";

const App = () => {
  const [charizardHP, setCharizardHP] = useState(120);
  const [blastoiseHP, setBlastoiseHP] = useState(100);

  const blastoiseAttack = () => {
    setCharizardHP(charizardHP - 30)
  }

  const charizardAttack = () => {
    setBlastoiseHP(blastoiseHP - 25)
  }

  const container = document.querySelector('.container')

  if(charizardHP <= 0) {
    container.innerHTML = 'Blastoise Wins!'
  }

  if(blastoiseHP <= 0) {
    container.innerHTML = 'Charizard Wins!'
  }

  return (
    <div className="container">
      <Pokemon name="Blastoise" img={Blastoise} hp={blastoiseHP} attack={blastoiseAttack}/>
      <Pokemon name="Charizard" img={Charizard} hp={charizardHP} attack={charizardAttack}/>
    </div>
  );
};

export default App;
