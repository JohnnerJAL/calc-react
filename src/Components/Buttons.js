import React from "react";
import "./Styles/buttons.css";

export default function Buttons(props) {

  const { 
    handleClick,
    handleClickErase,
    handleClickDelete,
    handleClickResult
   } = props;

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