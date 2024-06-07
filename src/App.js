import React, { useState } from "react";
import "./App.css";

function App() {
  const [calculation, setCalculation] = useState([]);
  const [result, setResult] = useState("");

  const landleClick = value => {
    if(value === "+" || value === "÷" || value === "x" || value === "-"){
      if(result !== "+" && result !== "÷" && result !== "x" && result !== "-"){
        setResult(value);
        setCalculation([...calculation,result]);
      }else{
        setResult(value);
        setCalculation([...calculation]);
      }
    }else {
      setResult(value);
      setCalculation([...calculation,result]);
    }
  }
  const clickReturn = () => {
    setResult(calculation.pop());
    setCalculation([...calculation])
  }
  const clickDelete = () => {
    setResult("");
    setCalculation([])
  }
  const handleResult = () => {
    const fullNumbers = [...calculation,result]
    const answer = fullNumbers
      .join("")
      .split(/(\D)/g)
      .map(value => (value.match(/\d/g) ? parseInt(value, 0) : value))
      .reduce((acc, value, index, array) => {
        switch (value) {
          case "+":
            return (acc = acc + array[index + 1]);
          case "-":
            return (acc = acc - array[index + 1]);
          case "x":
            return (acc = acc * array[index + 1]);
          case "÷":
            return (acc = acc / array[index + 1]);
          default:
            return acc;
        }
      });
      setCalculation([...fullNumbers ,"="]);
      setResult(answer);
  };

  return (
    <div className="app">
      <span className="calculation">{calculation}
        <span className="result">{result}</span>
      </span>
      <section className="box">
        <section className="numbers">
          <button className="button" onClick={()=>landleClick(7)}>7</button>
          <button className="button" onClick={()=>landleClick(8)}>8</button>
          <button className="button" onClick={()=>landleClick(9)}>9</button>
          <button className="button" onClick={()=>landleClick(4)}>4</button>
          <button className="button" onClick={()=>landleClick(5)}>5</button>
          <button className="button" onClick={()=>landleClick(6)}>6</button>
          <button className="button" onClick={()=>landleClick(1)}>1</button>
          <button className="button" onClick={()=>landleClick(2)}>2</button>
          <button className="button" onClick={()=>landleClick(3)}>3</button>
          <button className="button" onClick={clickReturn}>D</button>
          <button className="button" onClick={()=>landleClick(0)}>0</button>
          <button className="button" onClick={()=>landleClick(".")}>.</button>
          <button className="button" onClick={clickDelete}>C</button>
        </section>
        <section className="operators">
          <button className="button operator sm" onClick={()=>landleClick("÷")}>÷</button>
          <button className="button operator" onClick={()=>landleClick("x")}>x</button>
          <button className="button operator sm" onClick={()=>landleClick("-")}>-</button>
          <button className="button operator" onClick={()=>landleClick("+")}>+</button>
          <button className="button operator sm mm" onClick={handleResult}>=</button>
        </section>
      </section>
    </div>
  );
}

export default App;