import styled from "styled-components";

export const InputNumb = styled.input`
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

export const BtnElementTop = styled.button`
  width: 45px;
  height: 45px;
  margin: 6px;
  border-radius: 5px;
  background-color: #5bc6f0;
  color: #c5f5f8;
  border: none;
`;

export const DivCalcBottom = styled.div`
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

export const BtnBottom = styled.button`
  height: 73px;
  width: 80px;
  border: none;
  border-radius: 5px;
  background-color: #f2f2f2;
`;
export const BtnEqual = styled.button`
  height: 43px;
  width: 60px;
  margin: 6px;
  background-color: #5bc6f0;
  color: #c5f5f8;
  border-radius: 5px;
  border: none;
`;
