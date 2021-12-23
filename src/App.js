import React, { useState } from "react";
import styled from "styled-components";
import "@fontsource/roboto/400.css";

export default function App() {
  const [result, setResult] = useState(null);
  const [inputValue, setInputValue] = useState(0);

  const numbers = {
    numb: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  };
  const btnTop = {
    btn: ["AC", "/", "*", "-", "+"],
  };
  const { numb } = numbers;
  const { btn } = btnTop;

  const handleSubmit = (event) => {
    event.preventDefault();
    setResult(inputValue);
  };

  return (
    <DivFull>
      <DivCalcTop>
        <DivTopElement>
          <div>...</div>
          <div style={{ color: "#C96D91" }}>X</div>
        </DivTopElement>
        <form onSubmit={handleSubmit}>
          <DivResult>{result && result}</DivResult>
          <InputNumb
            type="number"
            placeholder="0"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
        </form>
        <DivBtnElementTop>
          {btn.map((b) => (
            <BtnElementTop key={b}>{b}</BtnElementTop>
          ))}
        </DivBtnElementTop>
      </DivCalcTop>
      <DivCalcBottom>
        {numb.map((n) => (
          <BtnBottom key={n}>{n}</BtnBottom>
        ))}
        <BtnEqual>=</BtnEqual>
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
  width: 130px;
  margin: 10px;
  background-color: #5bc6f0;
  color: #c5f5f8;
  border-radius: 5px;
  border: none;
`;
