import React, { useState } from "react";
import "@fontsource/roboto/400.css";
import MenuBar from "../menu/MenuBar";
import Layout from "../layout/Layout";
import Title from "../Title/Title";
import DivCalcTop from "../divTop/fullContainer/DivTop";
import ContainerTop from "../divTop/elementTop/DivTopElement";
import Result from "../divTop/divResultTop/Result";
import Input from "../divTop/InputNumb/Input";
import DivBtnElement from "../divTop/divBtnElemnt/DivBtnElement";
import BtnT from "../buttons/BtnT";
import DivBottom from "../divBottom/fullContainer/DivBottom";
import BtnB from "../buttons/BtnB";
import BtnEqual from "../buttons/BtnEqual";
export default function Home() {
  const [result, setResult] = useState([]);
  const [inputValue, setInputValue] = useState([null]);

  const numb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "."];
  const btn = ["AC", "*", "/", "+", "-", "DEL"];

  const funcResult = (event) => {
    event.preventDefault();
    // eslint-disable-next-line no-eval
    if (typeof inputValue === String) setResult(eval(inputValue));
    // eslint-disable-next-line no-eval
    else setResult(eval(inputValue.toString()));
    setInputValue("");
  };

  const handleClickButtonBottom = (event) => {
    event.preventDefault();
    setInputValue((prevState) =>
      (prevState + event.target.innerText).toString()
    );
  };

  const handleClickButtonTop = (event) => {
    event.preventDefault();
    if (event.target.innerText === "AC") {
      setInputValue("");
      setResult("");
    } else if (event.target.innerText === "DEL") {
      setInputValue(inputValue.slice(0, -1));
    } else
      setInputValue((prevState) => [
        prevState + event.target.innerText.toString(),
      ]);
  };

  //div with elements of top
  const topElements = () => {
    return (
      <>
        <DivCalcTop>
          <ContainerTop>
            <div>
              <MenuBar />
            </div>
          </ContainerTop>
          <form onSubmit={(event) => funcResult(event)}>
            <Result style={{ color: "#5a5a5a" }}>{result && result}</Result>
            <Input
              id="inputValue"
              type="text"
              placeholder="0"
              autoComplete="off"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
            />
          </form>
          <DivBtnElement>
            {btn.map((b) => (
              <BtnT onClick={(event) => handleClickButtonTop(event)} key={b}>
                <label htmlFor="inputValue"> {b}</label>
              </BtnT>
            ))}
          </DivBtnElement>
        </DivCalcTop>
      </>
    );
  };

  //div with elements of bottom
  const botElements = () => {
    return (
      <>
        <DivBottom>
          {numb.map((n) => (
            <BtnB
              htmlFor="inputValue"
              key={n}
              onClick={(event) => handleClickButtonBottom(event)}
            >
              {n}
            </BtnB>
          ))}
          <BtnEqual onClick={(event) => funcResult(event)}>=</BtnEqual>
        </DivBottom>
      </>
    );
  };

  //return general
  return (
    <Layout>
      <Title htmlFor="inputValue">Calculator</Title>
      {topElements()}
      {botElements()}
    </Layout>
  );
}
