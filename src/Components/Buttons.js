import { React, Component } from "react";
import "./Styles/buttons.css";

class Buttons extends Component {

  render() {

    let operation = "";
    
    const handleClick = (event) => {
      operation += event.target.innerText;
      const screen = document.getElementById("screen");//Why can't I put this outside?
      (screen.lastChild)
      ? screen.lastChild.innerText = operation
      : screen.innerHTML = `<p>${operation}</p>`;
    }
    
    const handleClickResult = () => {
      const screen = document.getElementById("screen");
      const result = eval(operation);
      screen.innerHTML += `<p>${result}</p>`;
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
      console.log(operation);
      if (screen.lastChild) {
        screen.lastChild.innerText = operation;
      }
    }

    return (
      <div className="buttons">
        <div onClick={handleClick}>7</div>
        <div onClick={handleClick}>8</div>
        <div onClick={handleClick}>9</div>
        <div onClick={handleClick}>+</div>
        <div onClick={handleClick}>4</div>
        <div onClick={handleClick}>5</div>
        <div onClick={handleClick}>6</div>
        <div onClick={handleClick}>-</div>
        <div onClick={handleClick}>1</div>
        <div onClick={handleClick}>2</div>
        <div onClick={handleClick}>3</div>
        <div onClick={handleClick}>*</div>
        <div onClick={handleClick}>0</div>
        <div onClick={handleClick}>/</div>
        <div onClick={handleClickErase}>CE</div>
        <div onClick={handleClickDelete}>Erase</div>
        <div onClick={handleClickResult}>
          <a href="#anchor">=</a>
        </div>
      </div>
    )
  }
}

export default Buttons;