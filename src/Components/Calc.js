import React from "react";
import Buttons from "./Buttons";
//Disabling the rule for the whole file =>
/* eslint no-eval: 0 */

function Calc() {
  
  let operation = "";
    
  const handleClick = e => {
    operation += e.target.innerText;
    const screen = document.getElementById("screen");//Why can't I put this outside?
    (screen.lastChild)
    ? screen.lastChild.innerText = operation
    : screen.innerHTML = `<p>${operation}</p>`;
  }
    
  const handleClickResult = () => {
    const screen = document.getElementById("screen");
    const result = eval(operation);
    screen.innerHTML += `<p>${operation}</p>`;
    if (screen.lastChild.previousSibling) {
      screen.lastChild.previousSibling.removeAttribute("id");
      screen.lastChild.previousSibling.innerText = `${operation} = ${result}`
    }
    screen.lastChild.setAttribute("id", "anchor");
  }

    const handleClickErase = () => {
      const screen = document.getElementById("screen");
      operation = "";
      screen.innerHTML = "";
    }
    
    const handleClickDelete = () => {
      const screen = document.getElementById("screen");
      operation = operation.slice(0, operation.length-1);
      if (screen.lastChild) {
        screen.lastChild.innerText = operation;
      }
    }

    return (
      <Buttons 
        handleClick={handleClick}
        handleClickErase={handleClickErase}
        handleClickDelete={handleClickDelete}
        handleClickResult={handleClickResult}
      />
    )
}

export default Calc;