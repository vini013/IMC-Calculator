import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(null);
  const [result, setResult] = useState(false);
  const [isValid, setIsValid] = useState(false);


  function handleAlturaChange({ target }) {
    setAltura(target.value);
  }

  function handlePesoChange({ target }) {
    setPeso(target.value);
  }

  function changeResultValue() {
    setResult(false);
  }

  function Timeout() {
    setTimeout(changeResultValue, Number('4000'));
  }

  function onButtonClick() {
    setImc(Number(peso / ((altura / 100) * (altura / 100))));
    setResult(true);
    setAltura('');
    setPeso('');
    Timeout();
  }

  function imcReturn() {
    if (imc < Number('17')) {
      return (
        <h3>{`Seu imc é: ${imc.toFixed(2)} e você está: Muito abaixo do peso`}</h3>)
    } else if (imc >= Number('17') && imc <= Number('18.49')) {
      return (
        <h3>{`Seu imc é: ${imc.toFixed(2)} e você está: Abaixo do peso`}</h3>)
    } else if (imc >= Number('18.50') && imc <= Number('24.99')) {
      return (
        <h3>{`Seu imc é: ${imc.toFixed(2)} e você está com: Peso normal`}</h3>)
    } else if (imc >= Number('25') && imc <= Number('29.99')) {
      return (
        <h3>{`Seu imc é: ${imc.toFixed(2)} e você está: Acima do peso`}</h3>)
    } else if (imc >= Number('30') && imc <= Number('24.99')) {
      return (
        <h3>{`Seu imc é: ${imc.toFixed(2)} e você está com: Obesidade 1`}</h3>)
    } else if (imc >= Number('35') && imc <= Number('29.99')) {
      return (
        <h3>{`Seu imc é: ${imc.toFixed(2)} e você está com: Obesidade 2(severa)`}</h3>)
    } else if (imc >= Number('40')) {
      return (
        <h3>{`Seu imc é: ${imc.toFixed(2)} e você está com: Obesidade 3(mórbida)`}</h3>)
    }
  }

  useEffect(() => {
    if (altura.length >= 2 && peso.length >= 2) {
      setIsValid(true)
    } else {
      setIsValid(false)
    }
  }, [altura, peso]);

  return (
    <div className="page">
      <div className="pageContainer">
        <h1>IMC Calculator</h1>
        <h2>Para calcular o IMC, basta preencher os campos abaixo:</h2>
        <form>
          <label>
            <input
              value={ altura }
              placeholder="Altura (Cm)"
              onChange={handleAlturaChange}
              type="number">
            </input>
          </label>
          <label>
            <input
              value={ peso }
              placeholder="Peso (kg)"
              onChange={handlePesoChange}
              type="number">
            </input>
          </label>
          <button
            disabled={ !isValid }
            onClick={onButtonClick}
            type="button"
          >
            Calcular
          </button>
        </form>
        {result && (
          imcReturn()
        )}
      </div>
    </div>
  );
}

export default App;
