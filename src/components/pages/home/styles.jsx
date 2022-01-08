import styled from "styled-components";

export const DivFull = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #83dcf9;
`;
export const DivTitle = styled.div`
  font-family: "Pushster", cursive;
  margin-top: 0;
  font-size: 80px;
  margin-bottom: 50px;
  color: #5a5a5a;
  text-shadow: 0px 0px 5px #cecbcb;
  color: ##403e48;
  @media (max-width: 343px) {
    font-size: 60px;
  }
`;
export const DivCalcTop = styled.div`
  width: 320px;
  height: 220px;
  background-color: #f2f2f2;
  border-radius: 5px;
  box-shadow: 0 0 5px 1px #969090;
`;
export const DivTopElement = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
  align-items: center;
`;
export const DivResult = styled.div`
  width: 95%;
  padding-right: 10px;
  margin: 0 0 20px 0;
  text-align: right;
  padding: 0;
  height: 25px;
`;
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
export const DivBtnElementTop = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
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
