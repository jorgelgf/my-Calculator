import React, { useState } from "react";
import styled from "styled-components";
import "@fontsource/roboto/400.css";
import MenuBar from "./Components/MenuBar";
export default function App() {
  const [result, setResult] = useState([]);
  const [inputValue, setInputValue] = useState([null]);

  const ArrayItems = {
    numb: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, ","],
    btn: ["AC", "*", "/", "+", "-"],
  };

  const { numb, btn } = ArrayItems;

  const funcResult = (event) => {
    event.preventDefault();

    if (typeof inputValue === String) setResult(eval(inputValue));
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
    } else
      setInputValue((prevState) => [
        prevState + event.target.innerText.toString(),
      ]);
  };

  return (
    <DivFull>
      <DivTitle>
        <label htmlFor="inputValue">Calculator</label>
      </DivTitle>
      <DivCalcTop>
        <DivTopElement>
          <div>
            <MenuBar />
          </div>
          <div
            style={{ color: "#C96D91", marginRight: "10px" }}
            onClick={() =>
              inputValue ? setInputValue(inputValue.slice(0, -1)) : null
            }
          >
            X
          </div>
        </DivTopElement>
        <form onSubmit={(event) => funcResult(event)}>
          <DivResult style={{ color: "#5a5a5a" }}>{result && result}</DivResult>
          <InputNumb
            id="inputValue"
            type="text"
            placeholder="0"
            autoComplete="off"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
        </form>
        <DivBtnElementTop>
          {btn.map((b) => (
            <BtnElementTop
              onClick={(event) => handleClickButtonTop(event)}
              key={b}
            >
              <label htmlFor="inputValue"> {b}</label>
            </BtnElementTop>
          ))}
        </DivBtnElementTop>
      </DivCalcTop>
      <DivCalcBottom>
        {numb.map((n) => (
          <BtnBottom
            htmlFor="inputValue"
            key={n}
            onClick={(event) => handleClickButtonBottom(event)}
          >
            {n}
          </BtnBottom>
        ))}
        <BtnEqual onClick={(event) => funcResult(event)}>=</BtnEqual>
      </DivCalcBottom>
    </DivFull>
  );
}

const DivFull = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #83dcf9;
`;
const DivTitle = styled.div`
  font-family: "Pushster", cursive;
  margin-top: 0;
  font-size: 80px;
  //  border: 1px solid black;
  margin-bottom: 50px;
  color: #5a5a5a;
  text-shadow: 0px 0px 5px #cecbcb;
  color: ##403e48;
`;

const DivCalcTop = styled.div`
  width: 320px;
  height: 220px;
  background-color: #f2f2f2;
  border-radius: 5px;
  box-shadow: 0 0 5px 1px #969090;
`;
const DivTopElement = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
  align-items: center;
`;
const DivResult = styled.div`
  width: 95%;
  padding-right: 10px;
  margin: 0 0 20px 0;
  text-align: right;
  padding: 0;
  height: 25px;
  //border: 1px solid black;
`;
const InputNumb = styled.input`
  width: 95%;
  padding-right: 10px;
  border: 1px solid black;
  height: 50px;
  text-align: right;
  border: transparent;
  background-color: #f2f2f2;
  color: #403e48;
  border: 0 none;
  outline: 0;
  font-size: 50px;
  ::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
const DivBtnElementTop = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  //border: solid black 1px;
`;
const BtnElementTop = styled.button`
  width: 45px;
  height: 45px;
  margin: 10px;
  border-radius: 5px;
  background-color: #5bc6f0;
  color: #c5f5f8;
  border: none;
`;

const DivCalcBottom = styled.div`
  width: 320px;
  height: 220px;
  font-size: 20px;
  display: flex;
  border-radius: 5px;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
  background-color: #f2f2f2;
  box-shadow: 0 0 5px 1px #969090;
  flex-wrap: wrap;
`;

const BtnBottom = styled.button`
  height: 73px;
  width: 80px;
  border: none;
  border-radius: 5px;

  // border: 1px solid black;
`;
const BtnEqual = styled.button`
  //border: 1px solid black;
  height: 43px;
  width: 60px;
  margin: 10px;
  background-color: #5bc6f0;
  color: #c5f5f8;
  border-radius: 5px;
  border: none;
`;
